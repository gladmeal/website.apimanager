import React from 'react';
import './App.scss';
import Page from './partials/page/Page';
import MainNav from './partials/main-nav/MainNav';

export default class App extends React.Component{
    render() {
        return (
            <Page>
                <main className="w-100 d-flex flex-column app-base">
                    <MainNav className="not-border" />
                    <section className='page-part part-1 container-fluid mt-5 py-5 d-flex justify-content-center px-4'>
                        <p className='my-5 text-center p-4 p-md-5'> 
                            <span className="mx-md-4 px-2 d-inline-block"> Api pour avoir </span> <br /> 
                            <span className="mx-md-4 px-2 mt-1 d-inline-block"> toutes les informations sur les aliments  </span>
                        </p>
                    </section>
                </main>
            </Page>
        );
    }
};