import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Loader from '../partials/loader/Loader';
import AccountError from '../account-error/AccountError';
import FormError from '../partials/form-error/FormError';
import moment from "moment";

export default class SettingsToken extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            navigate: false,
            to: "../token-data",
            body: [],
            isError: false,
            isLoadding: false,
            url: '',
            error: '',
            head: [ "VALEUR", "ENTREPRISE", "TYPE", "CREATION", "MISE A JOUR", "INFORMATIONS", "MODIFIER", "SUPPRIMER" ],
            data: []
        };
    }

    _getTokenField( token ) {
        return (
            <div 
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={ () => {
                    navigator.clipboard.writeText( token.toString() );
                    alert( 'Copier dans le presse papier' );
                } }
            >
                <span 
                    style={{ maxWidth: '145px', whiteSpace: 'nowrap', overflow: 'hidden', display: 'block'  }
                }> 
                    { token }
                </span>
                ...
            </div>
        );
    }

    componentDidMount() {
        this.setState( {
            isLoadding: true
        }, () => {
            axios.get( 'api/token/listAll' ).then( ( { data } ) => {
                this.setState( {
                    isLoadding: false,
                    body: data.map( token => [
                        this._getTokenField( token.value ),
                        token.label,
                        token.level,
                        moment( token.createdAt ).format( 'MM-DD-YYYY' ),
                        moment( token.updatedAt ).format( 'MM-DD-YYYY' ),
                        <ItemListButton onClick={ this._detail.bind( this, token ) } icon="server"/>,
                        <ItemListButton onClick={ this._update.bind( this, token ) } icon="pencil-square"/>,
                        <ItemListButton onClick={ this._delete.bind( this, token ) } icon="x-octagon-fill"/>
                    ] ).reverse()
                } )
            } ).catch( () => {
                this.setState( {
                    isError: true
                } );
            } )
        } )
    }

    _makeNavigation() {
        this.setState( {
            navigate: true
        } );
    }

    _detail( token ) {
        this.setState( {
            url: `${ this.state.to }?token=${ token.value }`,
            navigate: true
        } );
    }

    _update( token ) {
        this.setState( {
            url: `../../add/token/?update=true&id=${ token._id }&label=${ token.label }&level=${ token.level }`,
            navigate: true
        } );
    }

    _delete( token )  {
        if ( window.confirm( `Voulez-vous réellement supprimer Ce token: ${ token.label }?` ) === true ) {
            return this.setState( {
                isLoadding: true
            }, () => (
                axios.delete( `api/token/delete/${ token._id }` ).then( () => this.setState( {
                    url: '../',
                    navigate: true,
                } ) ).catch( ( { response: { data } } ) => {
                    this.setState( {
                        isLoadding: false,
                        error: data.msg
                    } )
                } )
            ) )
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.state.navigate && (
                    <Navigate 
                        to={ this.state.url }
                    />
                ) }
                <ItemList
                    head={ this.state.head }
                    body={ this.state.body }
                    icon="shield-lock-fill"
                    title="tokens"
                    visible={ !this.state.isError }
                >
                    { this.state.navigate && (
                        <Navigate to={ this.state.url } />
                    ) }
                    { this.state.isError && (
                        <AccountError errorCode={ 403 } errorMessage="you cannot access to this page" />
                    ) }
                    <FormError title={ this.state.error } />
                    <Loader visible={ this.state.isLoadding } title="chargement..."/>
                </ItemList>
            </React.Fragment>
        );
    }
};