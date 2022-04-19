import React from 'react';
import './App.scss';
import Page from './partials/page/Page';
import MainNav from './partials/main-nav/MainNav';
import SettingsTokenData from './settings-token-data/SettingsTokenData';
import FormState from './partials/form-state/FormState';
import getURL from 'get-url-parts';
import { setProfile, getState, setRole } from '../store/reducers/profile';
import { connect } from 'react-redux';

class App extends FormState{
    _onInput( e ) {
        const 
            val =  e.target.value;
        if ( val ) {
            this.setState( {
                token: val
            } );
        }
    }

    _onClick() {
        if ( this._isQuery( 'token' ) && this._isQuery( 'token' ).length > 25 ) {
            window.location = getURL.origin().concat( `?token=${this.state.token}#token-data` );
        }
    }

    render() {
        return (
            <Page>
                <main className="w-100 d-flex flex-column app-base pb-2">
                    <MainNav className="not-border" />
                    <section className='page-part part-1 container-fluid mt-md-5 pb-5 pt-5 d-flex justify-content-center px-4'>
                        <p className='my-5 text-center p-4 p-md-5'> 
                            <span className="mx-md-5 px-2 my-3 d-flex flex-column flex-md-row justify-content-center align-items-center"> 
                                <i className="d-flex justify-content-center align-items-center bi bi-server me-3 mb-3 mb-md-0 ps-2"></i>
                                <span className='ms-sm-3'>aliments, nourritures, plats </span>
                            </span>
                        </p>
                    </section>
                    <section className='page-part container-lg mt-5 mb-4'>
                        <div className="w-100 d-flex flex-column align-items-center justify-content-center page-part-title mb-5">
                            <i className="bi bi-cpu-fill me-4"></i>
                            <p className="m-0 mt-3"> Accès aux APIs </p>
                        </div>
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12 col-sm-6 col-md-4 px-3 pt-5">
                                <div className="page-part-item d-flex flex-column align-items-center w-100">
                                    <div className="page-part-item-head  d-flex align-items-center justify-content-center w-100 py-3">
                                        <i className="bi bi-credit-card-2-front-fill me-3"></i>
                                        <p className="m-0"> PLAN 1 </p>
                                    </div>
                                    <div className="page-part-item-body py-5 ps-3 ps-md-5 d-flex flex-column justify-content-center w-100">
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Requête: 40/jr </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Historique </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Mise à jour </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Vitesse: 0.3/2 </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Coût: 500f </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 px-3 pt-5">
                                <div className="page-part-item d-flex flex-column align-items-center w-100">
                                    <div className="page-part-item-head d-flex align-items-center justify-content-center w-100 py-3">
                                        <i className="bi bi-credit-card-2-front-fill me-3"></i>
                                        <p className="m-0"> PLAN 2 </p>
                                    </div>
                                    <div className="page-part-item-body py-5 ps-3 ps-md-5 d-flex flex-column justify-content-center w-100">
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Requête: 100/jr </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Historique </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Mise à jour </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Vitesse: 0.4/2 </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Coût: 800f </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 px-3 pt-5">
                                <div className="page-part-item d-flex flex-column align-items-center w-100">
                                    <div className="page-part-item-head d-flex align-items-center justify-content-center w-100 py-3">
                                        <i className="bi bi-credit-card-2-front-fill me-3"></i>
                                        <p className="m-0"> PLAN 4 </p>
                                    </div>
                                    <div className="page-part-item-body py-5 ps-3 ps-md-5 d-flex flex-column justify-content-center w-100">
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Requête: 200/jr </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Historique </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Mise à jour </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Vitesse: 0.7/2 </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Coût: 1000f </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 px-3 pt-5">
                                <div className="page-part-item d-flex flex-column align-items-center w-100">
                                    <div className="page-part-item-head d-flex align-items-center justify-content-center w-100 py-3">
                                        <i className="bi bi-credit-card-2-front-fill me-3"></i>
                                        <p className="m-0"> PLAN 4 </p>
                                    </div>
                                    <div className="page-part-item-body py-5 ps-3 ps-md-5 d-flex flex-column justify-content-center w-100">
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Requête: 500/jr </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Historique </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Mise à jour </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Vitesse: 1/2 </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Coût: 1500f </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 px-3 pt-5">
                                <div className="page-part-item d-flex flex-column align-items-center w-100">
                                    <div className="page-part-item-head d-flex align-items-center justify-content-center w-100 py-3">
                                        <i className="bi bi-credit-card-2-front-fill me-3"></i>
                                        <p className="m-0"> PLAN 5 </p>
                                    </div>
                                    <div className="page-part-item-body py-5 ps-3 ps-md-5 d-flex flex-column justify-content-center w-100">
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Requête: 1500/jr </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Historique </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Mise à jour </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Vitesse: 1.5/2 </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-x me-3"></i>
                                            <p className='m-0'> Coût: 2000f </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 px-3 pt-5">
                                <div className="page-part-item d-flex flex-column align-items-center w-100">
                                    <div className="page-part-item-head d-flex align-items-center justify-content-center w-100 py-3">
                                        <i className="bi bi-credit-card-2-front-fill me-3"></i>
                                        <p className="m-0"> PLAN 6 </p>
                                    </div>
                                    <div className="page-part-item-body py-5 ps-3 ps-md-5 d-flex flex-column justify-content-center w-100">
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Requête: illimité </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Historique </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Mise à jour </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Vitesse: 2/2 </p>
                                        </div>
                                        <div className="page-part-item-body-item d-flex align-items-center">
                                            <i className="bi bi-check me-3"></i>
                                            <p className='m-0'> Coût: 3000f </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='page-part py-5 page-part-3 mt-5 d-flex flex-column justify-content-center align-items-center'>
                        <div className="w-100 d-flex flex-column align-items-center justify-content-center page-part-title mb-5">
                            <i className="bi bi-cloud-upload-fill me-4"></i>
                            <p className="m-0 mt-3 text-center"> Activité du token </p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center part-page-form mb-4">
                            <input 
                                type="text" 
                                name="token" 
                                className='ps-2' 
                                placeholder='votre token...' 
                                id="token" 
                                onInput={ this._onInput.bind( this ) }
                            />
                            <input 
                                type="submit"
                                value="voir" 
                                className='mt-2 px-5 py-3 rounded-pill' 
                                id="submit" 
                                onClick={ this._onClick.bind( this ) }
                            />
                        </div>
                    </section>
                    { this._isQuery( 'token' ) && (
                        <section className='page-part py-5 page-part-4 mt-5 d-flex flex-column justify-content-center align-items-center' id="token-data">
                            <div className="w-100 my-4">
                                <SettingsTokenData />
                            </div>
                        </section>
                    ) }
                </main>
            </Page>
        );
    }
};

export default connect( getState, { setProfile, setRole } )( App );