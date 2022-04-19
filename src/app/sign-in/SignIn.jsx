import React from 'react';
import './SignIn.scss';
import { Navigate } from 'react-router-dom';
import Loader from '../partials/loader/Loader';
import FormError from '../partials/form-error/FormError';
import axios from 'axios';
import { setProfile } from '../../store/reducers/profile';
import { connect } from 'react-redux';

class SignIn extends React.Component{
    constructor( props ) {
        super( props );
        this.state  = {
            email: '',
            password: '',
            navigate: false,
            isLoading: false,
            error: ''
        };

        this._submitClicked.bind( this );
    }

    _formSubmit( e ) {
        e.preventDefault();
    }

    _submitClicked() {
        if ( this.state.email && this.state.password ) {
            return this.setState( {
                isLoading: true,
                error: ''
            }, () => {
                return axios.post( 'api/admin/login', {
                    email: this.state.email,
                    password: this.state.password
                } ).then( ( { data } ) => {
                    this.props.setProfile( {
                        role: data.role,
                        email: data.email,
                        name: data.name,
                        token: data.token
                    } );
                    return this.setState( {
                        isLoading: false,
                        navigate: true
                    } );
                } ).catch( ( { response: { data } } ) => {
                    return this.setState( {
                        isLoading: false,
                        error: data.msg
                    } );
                } )
            } );
        }
        this.setState( { error: 'invalid field' } );
    }

    _setVal( e ) {
        this.setState( {
            [ e.target.name ]: e.target.value
        } );
    }

    render() {
        return (
            <main className='global d-flex justify-content-center align-items-center'>
                { this.state.navigate && <Navigate to="/account/home" /> }
                <form 
                    id="form" 
                    onSubmit={ this._formSubmit }
                    className="d-flex flex-column justify-content-center align-items-start py-5 px-3 px-sm-5"
                >
                    <div className="form-title mb-3 text-center w-100">
                        <p className='text-center'> 
                            <span> Glad Meal </span> 
                            Admin 
                        </p>
                    </div>
                    <div className="form-floating mt-2">
                        <input 
                            type="email" 
                            className="form-control ps-3" 
                            name="email" 
                            placeholder='Az:' 
                            id="email" 
                            autoComplete='off'
                            onInput={ e => this._setVal( e ) }
                        />
                        <label htmlFor="email" className="form-floating-label ps-3"> Email </label>
                    </div>
                    <div className="form-floating mt-3">
                        <input 
                            type="password" 
                            className="form-control ps-3" 
                            name="password" 
                            placeholder='Az:' 
                            id="password"
                            autoComplete='off' 
                            onInput={ e => this._setVal( e ) }
                        />
                        <label htmlFor="password" className="form-floating-label ps-3"> Password </label>
                    </div>
                    <Loader visible={ this.state.isLoading } className="mt-4 dark" title="chargment..." />
                    <FormError className="mt-4 dark" title={ this.state.error } />
                    <div className="content-submit d-flex justify-content-center align-items-center pt-md-4 w-100">
                        <input 
                            type="submit" 
                            value="Connexion" 
                            className='mt-4 px-5 py-3 rounded-pill'
                            onClick={ () => this._submitClicked() }
                        />
                    </div>
                </form>
            </main>
        );
    }
};

export default connect( null, { setProfile } )( SignIn ); 