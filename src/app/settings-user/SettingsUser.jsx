import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import axios from "axios";
import Loader from '../partials/loader/Loader';
import AccountError from '../account-error/AccountError';
import { Navigate } from "react-router-dom";
import FormError from '../partials/form-error/FormError';

export default class SettingsUser extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            body: [],
            head: [],
            isError: false,
            isLoadding: false,
            url: '',
            error: '',
            navigate: false
        };
    }

    _updateUser( user ) {
        const 
            id = user._id,
            name = user.name,
            email = user.email;
        this.setState( {
            url: `../add-user?update=true&id=${ id }&name=${ name }&email=${ email }&role=${ user.role }`,
            navigate: true
        } );
    }

    _deleterUser( user )  {
        if ( window.confirm( `Voulez-vous réellement supprimer l'utilisateur: ${ user.name }?` ) === true ) {
            return this.setState( {
                isLoadding: true
            }, () => (
                axios.delete( `api/admin/delete/${ user._id }` ).then( () => this.setState( {
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

    componentDidMount() {
        this.setState( {
            isLoadding: true
        }, () => {
            axios.get( 'api/admin/users' ).then( ( { data } ) => {
                this.setState( {
                    isLoadding: false,
                    body: data.map( user => [
                        user._id,
                        user.name,
                        user.email,
                        user.updatedAt,
                        user.role,
                        <ItemListButton onClick={ this._updateUser.bind( this, user ) } icon="pencil-square"/>,
                        <ItemListButton onClick={ this._deleterUser.bind( this, user ) } icon="x-octagon-fill"/>
                    ] ).reverse()
                } )
            } ).catch( () => {
                this.setState( {
                    isError: true
                } );
            } )
        } )
    }

    render() {
        return (
            <ItemList
                head={ [ "Numero utilisateur", "nom", "email", "date de création", "type", "modifier", "supprimer" ] }
                body={ this.state.body }
                icon="people-fill"
                title="administrateurs"
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
        );
    }
};