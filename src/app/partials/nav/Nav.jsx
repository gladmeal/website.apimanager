import React from "react";
import './Nav.scss';
import NavItem from './../nav-item/NavItem';
import { Link } from "react-router-dom";

export default class Nav extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            nav: '',
            status: false
        }
    }

    componentDidMount() {
        this._setHidden();
    }

    _setVisible() {
        this.setState( {
            nav: 'd-flex d-md-flex',
            status: true
        } );
    }

    _setHidden() {
        this.setState( {
            nav: 'd-none d-md-flex',
            status: false
        } );
    }

    _toggle() {
        this.state.status ? this._setHidden() : this._setVisible();
    }

    render() {
        return (
            <nav 
                className={ `w-100 px-3 py-2 navbar d-flex flex-column flex-md-row align-items-center shadow border-bottom ${ this.props.className }` }
            >
                <div className="d-flex navbar-part first align-items-center justify-content-between">
                    <div className="navbar-brand d-flex align-items-center">
                        <i className="bi bi-terminal-fill"></i>
                        <p className="m-0 ms-3">
                            <Link to={ '/' } className="link"> Glad Meal Admin </Link>
                            <span className="ms-3 d-none d-md-inline-block"> | </span> 
                        </p>
                    </div>
                    <div 
                        className="navbar-button d-flex d-md-none justify-content-center align-items-center"
                        onClick={ () => this._toggle() }
                    >
                        <i className="bi bi-text-right"></i>
                    </div>
                </div>
                <div 
                    className={ `${ this.state.nav } flex-column flex-md-row navbar-part second align-items-md-center` }
                    onClick={ () => this._setHidden() }
                >
                    { this.props.children !== undefined ? (
                        this.props.children
                    ) : (
                        <React.Fragment>
                            <NavItem to="/account/home" name="Dashboard" />
                            <NavItem to="/account/add" name="Ajouter" />
                            <NavItem to="/account/history" name="Historique"/>
                            <NavItem to="/account/update" name="Modifier"/>
                            <NavItem to="/account/settings" name="Parametres"/>
                        </React.Fragment>
                    ) }
                </div>
            </nav>
        );
    }
}
