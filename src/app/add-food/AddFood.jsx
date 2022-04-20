import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import FormState from "../partials/form-state/FormState";
import Loader from '../partials/loader/Loader';
import FormError from '../partials/form-error/FormError';
import getURL from "get-url-parts";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class AddFood extends FormState{
    constructor( props ) {
        super( props );
        this.state = {
            list: [
                { id: 1, value: 'bread' }, 
                { id: 2, value: 'wine' }, 
                { id: 3, value: 'rice' }, 
                { id: 4, value: 'mango' }, 
                { id: 5, value: 'banana' }, 
                { id: 6, value: 'cassava' }
            ]
        };
    }

    _onFormSubmit( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <Form 
                title="Ajouter une nouriture" 
                icon="shop"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <span className="mt-3"></span>
                <FormControl 
                    name="name"
                    type="text"
                    label="Nom de la nourriture"
                    id="name"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="options"
                    type="select"
                    options={ this.state.list }
                    label="Aliments"
                    id="foodstuff"
                />
                <span className="mt-5"></span>
                <FormButton />
            </Form>
        );
    }
};