import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";

export default class AddToken extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
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

    _onFormSubmit( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <Form 
                title="Ajouter un token" 
                icon="shield-fill-check"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <span className="mt-3"></span>
                <FormControl 
                    multiple={ false }
                    name="options"
                    type="select"
                    options={ this.state.plans }
                    label="Plan"
                    id="foodstuff"
                />
                <span className="mt-5"></span>
                <FormButton name="créer" />
            </Form>
        );
    }
};