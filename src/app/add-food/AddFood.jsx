import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import AddFoodStuff from "../add-foodstuff/AddFoodStuff";
import Loader from '../partials/loader/Loader';
import FormError from '../partials/form-error/FormError';
import getURL from "get-url-parts";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class AddFood extends AddFoodStuff{
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            list: [],
            selected: [],
            form: {
                name: '',
                foodstuffs: []
            }
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState( {
            isLoading: true
        }, () => {
            axios.get( 'api/foodstuff/list' ).then( ( { data } ) => {
                const 
                    { foodstuffs } = getURL.query(),
                    result = [];
                        if ( foodstuffs ) {
                            foodstuffs.split( ';' ).forEach( _item => {
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
                        foodstuffs: [
                            ...result.map( item => item.id )
                        ]
                    }
                } )
            } ).catch( () => {
                this.setState( {
                    isLoading: false,
                    error: 'Failed to load foodstuff\'s list'
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
            api = update ? `api/food/update/${ id }` : 'api/food/create';
        
        if ( update && !id ) {
            return this.setState( {
                error: 'Missing food id'
            } );
        }

        this.setState( {
            isLoading: true,
            error: ''
        }, () => {
            axios.request( {
                method: update ? 'PUT' : 'POST',
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
                foodstuffs: data
            }
        } );
    }

    render() {
        return (
            <Form 
                title="Ajouter une nouriture" 
                icon="shop"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <span className="mt-3"></span>
                { this.state.navigate && (
                    <Navigate to="../" />
                ) }
                <FormControl 
                    name="name"
                    type="text"
                    label="Nom de la nourriture"
                    id="name"
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="foodstuffs"
                    type="select"
                    options={ this.state.list }
                    label="Aliments"
                    id="foodstuffs"
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