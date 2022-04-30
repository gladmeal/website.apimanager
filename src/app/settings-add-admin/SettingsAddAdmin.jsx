import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import { getState } from "../../store/reducers/profile";
import { connect } from "react-redux";
import AddFoodStuff from "../add-foodstuff/AddFoodStuff";
import FormError from '../partials/form-error/FormError';
import Loader from "../partials/loader/Loader";
import getURL from "get-url-parts";
import VerifyUser from "../partials/verify-user/VerifyUser";
import axios from "axios";
import { Navigate } from "react-router-dom";

class SettingsAddAdmin extends AddFoodStuff{
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            authorizations: [],
            form: {},
            role: 1
        };
    }

    _onFormSubmit( e ) {
        e.preventDefault();

        const 
            { update, id } = getURL.query(),
            api = update ? `api/admin/update/${ id }` : 'api/admin/registration';
        
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
            } ).then( ( ) => {
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

    componentDidMount() {
        super.componentDidMount();
        const 
            roles = this.props.profile.role,
            result = [];
                for ( let i = 1; i < roles; i++ )
                    result.push( {
                        id: i,
                        value: `Type: ${ i }`
                    } );
        this.setState( {
            authorizations: result
        } );

        const 
            { update, role } = getURL.query();
        if ( update && role ) {
            this.setState( {
                role: parseInt( role )
            } );
        }
    }

    _onValueChange( data ) {
        this.setState( {
            form: {
                ...this.state.form,
                role: data
            }
        } )
    } 

    render() {
        return (
            <VerifyUser>
                <Form 
                    title="Ajouter une Administrateur" 
                    icon="person-circle"
                    onSubmit={ ( e ) => this._onFormSubmit( e ) }
                >
                    <span className="mt-3"></span>
                    { this.state.navigate && (
                        <Navigate to="../" />
                    ) }
                    <FormControl 
                        name="name"
                        type="text"
                        label="Nom de l'administrateur"
                        id="name"
                        onChange={ this._onInput.bind( this ) }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="email"
                        type="email"
                        label="Email"
                        id="email"
                        onChange={ this._onInput.bind( this ) }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="password"
                        type="password"
                        label="Mot de passe"
                        id="password"
                        onChange={ this._onInput.bind( this ) }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="authorization"
                        type="select"
                        multiple={ false }
                        label="Authorization"
                        id="authorization"
                        options={ this.state.authorizations }
                        selected={ this.state.role }
                        onChange={ this._onValueChange.bind( this ) }
                    />
                    <span className="mt-5"></span>
                    <Loader visible={ this.state.isLoading } className="mt-4 dark" title="chargment..." />
                    <FormError className="mt-4 dark" title={ this.state.error } />
                    <FormButton name={ this.state.name } />
                </Form>
            </VerifyUser>
        );
    }
};

export default connect( getState )( SettingsAddAdmin );