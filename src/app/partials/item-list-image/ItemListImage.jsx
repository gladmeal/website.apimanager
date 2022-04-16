import React from "react";
import './ItemListImage.scss';

export default class ItemListImage extends React.Component{
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center item-list-button-container">
                <div 
                    className={ `item-list-button item-list-image d-flex justify-content-center align-items-center ${ this.props.className || '' }` }
                    onClick={ this.props.onClick }
                >
                    { this.props.src !== undefined ? (
                        <img src={ this.props.src } alt="icon props" />
                    ) : ( 
                        <i className="bi bi-file-earmark-image-fill"></i> 
                    ) }
                </div>
            </div>
        )
    }
};