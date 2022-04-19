import React from "react";
import ItemList from "../partials/item-list/ItemList";
import AccountError from '../account-error/AccountError';
import axios from "axios";
import Loader from "../partials/loader/Loader";
import getURL from "get-url-parts";

export default class SettingsTokenData extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            isError: false,
            isLoading: false,
            head: [ "Numéro de token", "valeur", "type", "ip", "navigateur", "date", "heure" ],
            body: []
        };
    }

    componentDidMount() {
        const 
            { token } = getURL.query();
        if ( !token ) {
            return this.setState( {
                isError: true
            } );
        }

        this.setState( { isLoading: true }, () => {
            axios.get( `${ getURL.path() !== '/' ? `/client/history?token=${token}` : `/api/history/${token}` }`,  ).then( result => {
                const 
                    head = [ 'ID', 'NAVIGATEUR', 'PAYS', 'REGION', 'HEURE' ],
                    body = result.data.map( item => {
                        if ( getURL.path() !== '/' ) {
                            return [ 
                                item._id, 
                                item.userBrowser, 
                                item.userCountry, 
                                item.userRegion, 
                                item.createdAt 
                            ];
                        }
                        return [ 
                            item._id, 
                            item.userBrowser, 
                            item.userCountry, 
                            item.userRegion,
                            item.userIP, 
                            item.createdAt 
                        ];
                    } ).reverse();
                    if ( getURL.path() !== '/' ) {
                        head[ head.length - 1 ] = 'ADRESSE IP';
                        head.push( 'HEURE' );
                    }
                this.setState( {
                    isLoading: false,
                    head: head,
                    body: body
                } );
            } ).catch( () => {
                this.setState( {
                    isError: true
                } );
            } )
        } )
    }

    render() {
        if ( this.state.isError ) {
            return <AccountError errorCode={ 403 } errorMessage='You cannot access to this page' />
        }
        return (
            <React.Fragment>
                <ItemList
                    head={ this.state.head }
                    body={ this.state.body }
                    icon="shield-fill-exclamation"
                    title="informations"
                ></ItemList>
                <Loader visible={ this.state.isLoading } title="page loadding" />
            </React.Fragment>
        );
    }
};