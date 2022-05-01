import React from "react";
import ItemList from "../partials/item-list/ItemList";
import AccountError from '../account-error/AccountError';
import axios from "axios";
import Loader from "../partials/loader/Loader";
import getURL from "get-url-parts";
import moment from "moment";

export default class SettingsTokenData extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            isError: false,
            isLoading: false,
            head: [ "Numéro de token", "valeur", "type", "ip", "navigateur", "date", "heure" ],
            body: [],
            error: 'You cannot access to this page'
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
            axios.get( `${ getURL.path() === '/' ? `/client/history?token=${token}` : `/api/history/${token}` }`,  ).then( result => {
                const 
                    head = getURL.path() !== '/'  ? 
                        [ 'ID', 'NAVIGATEUR', 'IP', 'PAYS', 'REGION', 'JOUR', 'HEURE' ] : 
                        [ 'ID', 'PAYS', 'REGION', 'JOUR', 'HEURE' ],
                    body = result.data.map( item => {
                        if ( getURL.path() !== '/' ) {
                            return [ 
                                item._id, 
                                item.userBrowser, 
                                item.userIP, 
                                item.userCountry, 
                                item.userRegion, 
                                moment( item.createdAt ).format( 'MM-DD-YYYY' ),
                                moment( item.createdAt ).format( 'HH:MM a' ) 
                            ];
                        }
                        return [ 
                            item._id, 
                            item.userCountry, 
                            item.userRegion,
                            moment( item.createdAt ).format( 'MM-DD-YYYY' ),
                            moment( item.createdAt ).format( 'HH:MM a' ) 
                        ];
                    } ).reverse();
                this.setState( {
                    isLoading: false,
                    head: head,
                    body: body
                } );
            } ).catch( ( err ) => {
                this.setState( {
                    isError: true,
                    error: err.response.data.msg
                } );
            } )
        } )
    }

    render() {
        if ( this.state.isError ) {
            return <AccountError errorCode={ 403 } errorMessage={ this.state.error } />
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