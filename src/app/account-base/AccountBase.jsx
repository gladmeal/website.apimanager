import React from "react";

import Page from './../partials/page/Page';
import Nav from './../partials/nav/Nav';
import { Navigate, Outlet } from "react-router-dom";
import { getState } from "../../store/reducers/profile";
import { connect } from "react-redux";
import axios from "axios";

class AccountBase extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            navigate: false
        };
    }
    componentDidMount() {
        const 
            profile = this.props.profile;
        if ( !profile.token || !profile.token.trim() ) {
            return this.setState( {
                navigate: true
            } );
        }
        axios.defaults.headers.common[ 'Authorization' ] = profile.token;
        axios.interceptors.response.use( 
            res => res,
            ( err ) => {
                if ( err.response.status === 403 ) {
                    this.setState( {
                        navigate: true
                    } );
                }
                return err;
            }
        )

        if ( profile.isConnected === false ) {
            return this.setState( {
                navigate: true
            } );
        }
    }

    render() {
        return (
            <Page>
                <Nav />
                <Outlet />
                { this.state.navigate && (
                    <Navigate to={ '/sign-in' }/>
                ) }
            </Page>
        );
    }
};

export default connect( getState )( AccountBase );