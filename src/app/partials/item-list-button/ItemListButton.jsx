import React from "react";
import './ItemListButton.scss';

export default class ItemListButton extends React.Component{
    constructor( props ) {
        super( props );
        this.counter = 0;
        this.state = {
            icon: this.props.icon || 'globe2'
        };
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center item-list-button-container">
                <div 
                    className={ `item-list-button d-flex justify-content-center align-items-center ${ this.props.className || '' }` }
                    onClick={ this.props.onClick }
                >
                    <i className={ `bi bi-${ this.state.icon }` }></i>
                </div>
            </div>
        )
    }
};