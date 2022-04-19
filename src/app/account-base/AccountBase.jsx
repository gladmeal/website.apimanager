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