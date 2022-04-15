import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";

export default class SettingsAddAdmin extends React.Component{
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
                <span className="mt-5"></span>
                <FormButton />
            </Form>
        );
    }
};