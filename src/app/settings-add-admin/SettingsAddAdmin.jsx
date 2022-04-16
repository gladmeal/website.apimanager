import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import FormState from "../partials/form-state/FormState";

export default class SettingsAddAdmin extends FormState{
    constructor( props ) {
        super( props );
        this.state = {
            authorizations: [
                { id: 1, value: 'type1' },
                { id: 2, value: 'type2' },
                { id: 3, value: 'type3' },
                { id: 4, value: 'type4' },
                { id: 5, value: 'type5' },
            ]
        };
    }

    _onFormSubmit( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <Form 
                title="Ajouter une Administrateur" 
                icon="person-circle"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <span className="mt-3"></span>
                <FormControl 
                    name="name"
                    type="text"
                    label="Nom de l'administrateur"
                    id="name"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="email"
                    type="email"
                    label="Email"
                    id="email"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="password"
                    type="password"
                    label="Mot de passe"
                    id="password"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="authorization"
                    type="select"
                    multiple={ false }
                    label="Authorization"
                    id="authorization"
                    options={ this.state.authorizations }
                />
                <span className="mt-5"></span>
                <FormButton name="créer" />
            </Form>
        );
    }
};