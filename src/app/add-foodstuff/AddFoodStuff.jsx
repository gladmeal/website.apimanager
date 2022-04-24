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

export default class AddFoodStuff extends FormState{
    constructor( props ) {
        super( props );
        this.state = {
            update: false,
            form: {
                name: '',
                energy: 0,
                fat: 0,
                carbohydrate: 0,
                ash: 0,
                fibre: 0,
                water: 0,
                protein: 0,
                zn: 0,
                fe: 0,
                ca: 0,
                n: 0,
                vitamin_a: 0,
                vitamin_b: 0,
                vitamin_c: 0,
                vitamin_d: 0,
                vitamin_e: 0,
            },
            error: '',
            isLoading: false,
            navigate: false,
            name: 'Créer'
        };    
    }

    componentDidMount() {
        const 
            queries = getURL.query() || {},
            data = {};
        for( const name in queries ) {
            const 
                value = decodeURIComponent( queries[ name ] ),
                node = document.getElementsByName( name )[ 0 ];
            if ( node ) {
                node.value = value;
                data[ name ] = value;
            }
        }
        this.setState( {
            name: queries.update ? 'Modifier' : 'Créer',
            update: queries.update ? true : false,
            form: {
                ...this.state.form,
                ...data
            } 
        } );
    }

    _verifyName() {
        const name = this.state.form.name;
        return (
            typeof name === 'string' &&
            name.length >= 3 &&
            /[a-z]{1,}[a-z0-9\-_\s]{1,}[a-z]{1,}/.test( name )
        );
    }

    _onFormSubmit( e ) {
        e.preventDefault();
        if ( !this._verifyName() ) {
            return this.setState( {
                error: 'Invalid foodstuff name'
            } );
        }

        const 
            { update, id } = getURL.query(),
            api = update ? `api/foodstuff/update/${ id }` : 'api/foodstuff/create';
        
        if ( update && !id ) {
            return this.setState( {
                error: 'Missing foodstuff id'
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

    _onInput( e ) {
        return new Promise( ( res ) => {
            const 
                target = e.target,
                name = target.name,
                value = target.value;
            this.setState( {
                form: {
                    ...this.state.form,
                    [ name ]: value
                }
            }, res );
        } );
    }

    render() {
        return (
            <Form 
                title="Ajouter une nouriture" 
                icon="stickies-fill"
                onSubmit={ ( e ) => this._onFormSubmit( e ) }
            >
                { this.state.navigate && (
                    <Navigate to="../" />
                ) }
                <span className="mt-3"></span>
                <FormControl 
                    name="name"
                    label="Nom de l'aliment"
                    id="name"
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="energy"
                    type="number"
                    label="Enegergy (kcal)"
                    id="energy"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="water"
                    type="number"
                    label="Eau (g)"
                    id="water"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="protein"
                    type="number"
                    label="Protéine (g)"
                    id="protein"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="carbohydrate"
                    type="number"
                    label="Glucide (g)"
                    id="carbohydrate"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="fibre"
                    type="number"
                    label="Fibre (g)"
                    id="fibre"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="ash"
                    type="number"
                    label="Cendre (g)"
                    id="ash"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="fat"
                    type="number"
                    label="Lipide (g)"
                    id="fat"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="ca"
                    type="number"
                    label="Calcuim (mg)"
                    id="calcuim"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="zn"
                    type="number"
                    label="Zinc (mg)"
                    id="zinc"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="n"
                    type="number"
                    label="Azote (mg)"
                    id="azote"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="fe"
                    type="number"
                    label="Fer (mg)"
                    id="fer"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamin_a"
                    type="number"
                    label="vitamine A (mg)"
                    id="vitamina"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamin_b"
                    type="number"
                    label="vitamine B (mg)"
                    id="vitaminb"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamin_c"
                    type="number"
                    label="vitamine C (mg)"
                    id="vitaminc"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamin_d"
                    type="number"
                    label="vitamine D (mg)"
                    id="vitamind"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-3"></span>
                <FormControl 
                    name="vitamin_e"
                    type="number"
                    label="vitamine E (mg)"
                    id="vitamine"
                    value={ 0 }
                    onChange={ this._onInput.bind( this ) }
                />
                <span className="mt-5"></span>
                <Loader visible={ this.state.isLoading } className="mt-4 dark" title="chargment..." />
                <FormError className="mt-4 dark" title={ this.state.error } />
                <FormButton name={ this.state.name } />
            </Form>
        );
    }
};