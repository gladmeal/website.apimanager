import React from 'react';
import './SignIn.scss';

export default class App extends React.Component{
    constructor( props ) {
        super( props );
        this.state  = {
            email: '',
            password: ''
        };
    }

    _formSubmit( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <main className='global d-flex justify-content-center align-items-center'>
                <form 
                    id="form" 
                    onSubmit={ this._formSubmit }
                    className="d-flex flex-column justify-content-center align-items-start py-5 px-3 px-sm-5"
                >
                    <div className="form-title mb-3 text-center w-100">
                        <p className='text-center'> Glad Meal Admin </p>
                    </div>
                    <div className="form-floating mt-2">
                        <input 
                            type="email" 
                            className="form-control ps-3" 
                            name="email" 
                            placeholder='Az:' 
                            id="email" 
                            autoComplete='off'
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
                        />
                        <label htmlFor="password" className="form-floating-label ps-3"> Password </label>
                    </div>
                    <div className="content-submit d-flex justify-content-center align-items-center pt-md-4 w-100">
                        <input type="submit" value="Envoyer" className='mt-4 px-5 py-3 rounded-pill' />
                    </div>
                </form>
            </main>
        );
    }
};