import React from "react";
import Form from '../partials/form/Form';
import FormControl from "../partials/form-control/FormControl";
import FormButton from "../partials/form-button/FormButton";

export default class AddFoodStuff extends React.Component{
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
                    label="Nom de l'aliment"
                    id="name"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="energy"
                    type="number"
                    label="Enegergy (kcal)"
                    id="energy"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="water"
                    type="number"
                    label="Eau (g)"
                    id="water"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="protein"
                    type="number"
                    label="Protéine (g)"
                    id="protein"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="carbohydrate"
                    type="number"
                    label="Glucide (g)"
                    id="carbohydrate"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="fibre"
                    type="number"
                    label="Fibre (g)"
                    id="fibre"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="ash"
                    type="number"
                    label="Cendre (g)"
                    id="ash"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="fat"
                    type="number"
                    label="Lipide (g)"
                    id="fat"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="calcuim"
                    type="number"
                    label="Calcuim (mg)"
                    id="calcuim"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="zinc"
                    type="number"
                    label="Zinc (mg)"
                    id="zinc"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="azote"
                    type="number"
                    label="Azote (mg)"
                    id="azote"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="fer"
                    type="number"
                    label="Fer (mg)"
                    id="fer"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamina"
                    type="number"
                    label="vitamine A (mg)"
                    id="vitamina"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitaminb"
                    type="number"
                    label="vitamine B (mg)"
                    id="vitaminb"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitaminc"
                    type="number"
                    label="vitamine C (mg)"
                    id="vitaminc"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamind"
                    type="number"
                    label="vitamine D (mg)"
                    id="vitamind"
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamine"
                    type="number"
                    label="vitamine E (mg)"
                    id="vitamine"
                />
                <span className="mt-5"></span>
                <FormButton />
            </Form>
        );
    }
};