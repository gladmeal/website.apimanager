import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import AddFoodStuff from "./../add-foodstuff/AddFoodStuff";
import Loader from '../partials/loader/Loader';
import FormError from '../partials/form-error/FormError';
import VerifyUser from "../partials/verify-user/VerifyUser";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { getState } from './../../store/reducers/profile';
import { connect } from "react-redux";

class SettingsMe extends AddFoodStuff{
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            error: '',
            form: {
                password1: '',
                password2: ''
            }
        };
    }

    _onInput( e ) {
        super._onInput( e ).then( () => {
            const 
                { name, value } = e.target;
            if ( name === 'password2' ) {
                if ( value !== this.state.form.password1 ) {
                    this.setState( {
                        error: 'the passwords are differents.'
                    } )
                } else {
                    this.setState( {
                        error: ''
                    } )
                }
            }
        } );
    }

    _onFormSubmit( e ) {
        e.preventDefault();

        this.setState( {
            isLoading: true,
            error: ''
        }, () => {
            axios.request( {
                method: 'PUT',
                data: {
                    password: this.state.form.password1
                },
                url: 'api/admin/update/'
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

    _isButtonVisible() {
        return this.state.form.password2.length >= 5 && this.state.error.length === 0;
    }

    render() {
        return (
            <VerifyUser>
                <Form 
                    title="Mes Informations" 
                    icon="gear-fill"
                    onSubmit={ ( e ) => this._onFormSubmit( e ) }
                >
                    { this.state.navigate && (
                        <Navigate to="../" />
                    ) }
                    <span className="mt-3"></span>
                    <FormControl 
                        name="email"
                        type="email"
                        label="Email (inchangeable)"
                        id="email"
                        value={ this.props.profile.email }
                        disabled={ true }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="name"
                        type="text"
                        label="Nom (inchangeable)"
                        id="name"
                        value={ this.props.profile.name }
                        disabled={ true }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="role"
                        type="number"
                        label="Role (inchangeable)"
                        id="role"
                        value={ this.props.profile.role }
                        disabled={ true }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="password1"
                        type="password"
                        label="Mot de passe"
                        id="password1"
                        onChange={ this._onInput.bind( this ) }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="password2"
                        type="password"
                        label="Mot de passe"
                        id="password2"
                        onChange={ this._onInput.bind( this ) }
                    />
                    <span className="mt-5"></span>
                    <Loader visible={ this.state.isLoading } className="mt-4 dark" title="chargment..." />
                    <FormError className="mt-4 dark" title={ this.state.error } />
                    <FormButton name="modifier" visible={ this._isButtonVisible() } />
                </Form>
            </VerifyUser>
        );
    }
};

export default connect( getState )( SettingsMe ); 