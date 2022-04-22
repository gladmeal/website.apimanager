import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import Loader from '../partials/loader/Loader';
import FormError from '../partials/form-error/FormError';
import getURL from "get-url-parts";
import axios from "axios";
import { Navigate } from "react-router-dom";
import AddFoodStuff from "../add-foodstuff/AddFoodStuff";

export default class AddPlate extends AddFoodStuff {
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            list: [],
            selected: [],
            form: {
                name: '',
                foods: []
            }
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState( {
            isLoading: true
        }, () => {
            axios.get( 'api/food/list' ).then( ( { data } ) => {
                const 
                    { foods } = getURL.query(),
                    result = [];
                        if ( foods ) {
                            foods.split( ';' ).forEach( _item => {
                                const 
                                    item = data.find( item => item._id === _item );
                                if ( item ) 
                                    result.push( {
                                        id: item._id,
                                        value: item.name
                                    } );
                            } ); 
                        } 
                document.dispatchEvent( new CustomEvent( 'data:selected', {
                    detail: result
                } ) );

                this.setState( {
                    isLoading: false,
                    list: data.map( item => ( {
                        id: item._id,
                        value: item.name
                    } ) ),
                    form: {
                        ...this.state.form,
                        foods: [
                            ...result.map( item => item.id )
                        ]
                    }
                } )
            } ).catch( ( err ) => {
                this.setState( {
                    isLoading: false,
                    error: 'Failed to load food\'s list'
                } );
            } )
        } );
    }

    _onFormSubmit( e ) {
        e.preventDefault();
        if ( !this._verifyName() ) {
            return this.setState( {
                error: 'Invalid foodstuff name'
            } );
        }

        const 
            { update, id } = getURL.query(),
            api = update ? `api/plate/update/${ id }` : 'api/plate/create';
        
        if ( update && !id ) {
            return this.setState( {
                error: 'Missing plate id'
            } );
        }

        this.setState( {
            isLoading: true,
            error: ''
        }, () => {
            axios.request( {
                method: 'POST',
                data: this.state.form,
                url: api
            } ).then( () => {
                this.setState( {
                    isLoading: false,
                    navigate: true
                } )
            } ).catch( ( { response: { data } } ) => {
                this.setState( {
                    isLoading: false,
                    error: data.msg
                } )
            } )
        } );
    }

    _onValueChange( data ) {
        this.setState( {
            form: {
                ...this.state.form,
                foods: data
            }
        } );
    }

    render() {
        return (
            <Form 
                title="Ajouter un plat" 
                icon="columns-gap"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <span className="mt-3"></span>
                { this.state.navigate && (
                    <Navigate to="../" />
                ) }
                <FormControl 
                    name="name"
                    type="text"
                    label="Nom du plat"
                    id="name"
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="options"
                    type="select"
                    options={ this.state.list }
                    label="Nourriture"
                    id="food"
                    onChange={ this._onValueChange.bind( this ) }
                />
                <span className="mt-5"></span>
                <Loader visible={ this.state.isLoading } className="mt-4 dark" title="chargment..." />
                <FormError className="mt-4 dark" title={ this.state.error } />
                <FormButton name={ this.state.name } />
            </Form>
        );
    }
};