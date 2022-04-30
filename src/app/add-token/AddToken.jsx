import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import AddFoodStuff from '../add-foodstuff/AddFoodStuff';
import Loader from '../partials/loader/Loader';
import FormError from '../partials/form-error/FormError';
import getURL from "get-url-parts";
import axios from "axios";
import VerifyUser from "../partials/verify-user/VerifyUser";
import { Navigate } from "react-router-dom";

export default class AddToken extends AddFoodStuff{
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            form: {
                level: 1,
                label: ''
            },
            plans: [
                { id: 1, value: 'plan 1 (40)' }, 
                { id: 2, value: 'plan 2 (100)' }, 
                { id: 3, value: 'plan 3 (200)' }, 
                { id: 4, value: 'plan 4 (500)' }, 
                { id: 5, value: 'plan 5 (1500)' }, 
                { id: 6, value: 'plan 6 (infini)' }
            ]
        };
    }

    componentDidMount() {
        super.componentDidMount();
        const { level } = getURL.query();
        if ( level ) {
            return this.setState( {
                form: {
                    ...this.state.form,
                    level: parseInt( level ) 
                }
            } );
        }
    }

    _onFormSubmit( e ) {
        e.preventDefault();

        const 
            { update, id } = getURL.query(),
            api = update ? `api/token/update/${ id }` : 'api/token/create';
    
        if ( update && !id ) {
            return this.setState( {
                error: 'Missing token id'
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

    _onPlanChange( val ) {
        this.setState( {
            form: {
                ...this.state.form,
                level: val
            }
        } );
    }

    render() {
        return (
            <VerifyUser>
                <Form 
                    title="Ajouter un token" 
                    icon="shield-fill-check"
                    onSubmit={ ( e ) => this._onFormSubmit( e ) }
                >
                    { this.state.navigate && (
                        <Navigate to="../" />
                    ) }
                    <span className="mt-3"></span>
                    <FormControl 
                        multiple={ false }
                        name="level"
                        type="select"
                        selected={ this.state.form.level }
                        options={ this.state.plans }
                        label="Plan"
                        id="plans"
                        onChange={ this._onPlanChange.bind( this ) }
                    />
                    <span className="mt-3"></span>
                    <FormControl 
                        name="label"
                        type="text"
                        label="Entreprise"
                        disabled={ this.state.update }
                        id="label"
                        onChange={ this._onInput.bind( this ) }
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