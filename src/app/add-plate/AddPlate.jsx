import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";

export default class AddPlate extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            list: []
        };
    }

    _onFormSubmit( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <Form 
                title="Ajouter un plat" 
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <FormControl 
                    name="file"
                    type="file"
                    label="Image"
                    id="file"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="name"
                    type="text"
                    label="Nom du plat"
                    id="name"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="options"
                    type="select"
                    options={ this.state.list }
                    label="Nourriture"
                    id="food"
                />
                <span className="mt-5"></span>
                <FormButton />
            </Form>
        );
    }
};