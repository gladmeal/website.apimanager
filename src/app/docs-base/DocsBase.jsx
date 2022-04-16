import React from "react";
import Page from "../partials/page/Page";
import MainNav from "../partials/main-nav/MainNav";

export default class DocsBase extends React.Component{
    render() {
        return (
            <Page>
                <MainNav />
                <div className="test"> Docs </div>
            </Page>
        );
    }
};