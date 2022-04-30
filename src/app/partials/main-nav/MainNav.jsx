import React from "react";
import NavItem from './../nav-item/NavItem';
import Nav from "../nav/Nav";

export default class MainNav extends React.Component{
    render() {
        return (
            <Nav className={ this.props.className }>
                <NavItem to="/" name="accueil"  />
                <NavItem to="../docs" name="docs"  />
                <NavItem to="../sign-in" name="connexion"  />
            </Nav>
        );
    }
}
