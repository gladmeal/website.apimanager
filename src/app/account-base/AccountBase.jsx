import React from "react";

import Page from './../partials/page/Page';
import Nav from './../partials/nav/Nav';
import { Outlet } from "react-router-dom";

export default class AccountBase extends React.Component{
    render() {
        return (
            <Page>
                <Nav />
                <Outlet />
            </Page>
        );
    }
};