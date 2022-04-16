import React from "react";
import './NavItem.scss';
import { NavLink } from 'react-router-dom';

export default class NavItem extends React.Component{
    _isActive( isActive ) {
        const style = 'navbar-link ';
        if ( isActive ) 
            return style.concat( 'active' );
        return style;
    }

    render() {
        return (
            <NavLink 
                to={ this.props.to || '#' } 
                className={ ( { isActive } ) => this._isActive( isActive ) }
            >
                <div className="py-2 m-2 mx-md-1 navbar-item px-3">
                    <p className="m-0"> { this.props.name } </p>
                </div>
            </NavLink>
        );
    }
}
