import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import axios from "axios";
import Loader from "../partials/loader/Loader";
import FormError from "../partials/form-error/FormError";
import { Navigate } from "react-router-dom";

export default class UpdateFoodStuff extends React.Component{
    constructor( props ) {
        super( props );
        this.url = 'api/foodstuff/';
        this.state = {
            data: [],
            list: [],
            navigate: false,
            isLoadding: false,
            error: '',
            pic: undefined,
            item: undefined
        };
    }

    componentDidMount() {
        this.setState( {
            isLoadding: true
        }, () => (
            axios.get( `${ this.url }list/?pictures=true` ).then( ( { data } ) => {
                this.setState( {
                    data,
                    list: data.map( item => ( {
                        value: item.name,
                        id: item._id
                    } ) ),
                    isLoadding: false
                } )
            } ).catch( () => (
                this.setState( {
                    isLoadding: false,
                    error: 'Failed to required data'
                } )
            ) )
        ) );
    }

    _onFormSubmit( e ) {
        e.preventDefault();
        const 
            form = new FormData();
            form.append( 'picture', this.state.pic );
        return this.setState( {
            isLoadding: true
        }, () => (
            axios.put( `${ this.url }picture/${ this.state.item }`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            } ).then( () => (
                this.setState( {
                    isLoadding: false,
                    navigate: true
                } )
            ) ).catch( ( { response: { data } } ) => (
                this.setState( {
                    isLoadding: false,
                    error: data.msg
                } )
            ) )
        ) );
    }

    _onSelect( item ) {
        this.setState( {
            item: item
        } );
    }

    _onPicture( pic ) {
        this.setState( {
            pic: pic.file
        } );
    }

    _buttonVisible() {
        return (
            this.state.pic !== undefined &&
            this.state.item !== undefined
        );
    }

    _getPicture() {
        if ( this.state.item ) {
            const 
                item = this.state.data.find( item => item._id === this.state.item );
            if ( item && item.picture ) {
                return item.picture.picture;
            }
        }
    }

    render() {
        return (
            <Form 
                title="Modifier la photo d'un aliment" 
                icon="stickies-fill"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <FormControl 
                    name="file"
                    type="file"
                    label="Image"
                    id="file"
                    url={ this._getPicture() }
                    extensions={ [ 'png', 'jpg', 'jpeg' ] }
                    onChange={ this._onPicture.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="options"
                    type="select"
                    multiple={ false }
                    options={ this.state.list }
                    label="Aliment"
                    id="food"
                    onChange={ this._onSelect.bind( this ) }
                />
                { this.state.navigate && (
                    <Navigate to="../" />
                ) }
                <span className="mt-5"></span>
                <Loader visible={ this.state.isLoadding } title="Chargement..." />
                <FormError title={ this.state.error } />
                <span className="mt-5"></span>
                <FormButton 
                    visible={ this._buttonVisible() } 
                    name="Modifier" 
                />
            </Form>
        );
    }
};