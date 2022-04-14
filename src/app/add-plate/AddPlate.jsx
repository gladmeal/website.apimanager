import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";

export default class AddPlate extends React.Component{
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
        console.log( this.ref.current.getValue() );
    }

    render() {
        return (
            <Form 
                title="Ajouter une nouriture" 
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
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