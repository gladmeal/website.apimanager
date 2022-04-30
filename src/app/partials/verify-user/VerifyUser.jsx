import React from "react";
import Loader from "../loader/Loader";
import AccountError from "../../account-error/AccountError";
import axios from "axios";

export default class VerifyUser extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            verified: false,
            authorized: true
        };
    }
    
    componentDidMount() {
        axios.get( 'api/admin/verifyToken' ).then( () => (
            this.setState( {
                verified: true,
                authorized: true
            } )
        ) ).catch( () => (
            this.setState( {
                verified: true,
                authorized: false
            } )
        ) )
    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        if ( !this.state.verified ) {
            return (
                <div className="container py-5 my-5">
                    <Loader visible={ !this.state.verified } title="chargement..."/>
                </div>
            );
        } else {
            if ( !this.state.authorized ) {
                return (
                    <AccountError errorCode={ 403 } errorMessage="you are not authorized to access to this page" />
                );
            }
        }
        return (
            <>
                { this.props.children }
            </>
        );
    }
};