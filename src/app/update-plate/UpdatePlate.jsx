import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";
import UpdateFoodStuff from "../update-foodstuff/UpdateFoodStuff";
import Loader from "../partials/loader/Loader";
import FormError from "../partials/form-error/FormError";
import { Navigate } from "react-router-dom";

export default class UpdatePlate extends UpdateFoodStuff{
    constructor( props ) {
        super( props );
        this.url = 'api/plate/'
    }

    render() {
        return (
            <Form 
                title="Modifier la photo d'un plat" 
                icon="columns-gap"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                <FormControl 
                    name="file"
                    type="file"
                    label="Image"
                    id="file"
                    extensions={ [ 'png', 'jpg', 'jpeg' ] }
                    url={ this._getPicture() }
                    onChange={ this._onPicture.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="options"
                    type="select"
                    options={ this.state.list }
                    label="Plat"
                    id="food"
                    multiple={ false }
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