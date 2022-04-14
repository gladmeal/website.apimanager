import React from "react";
import './FormButton.scss';

export default class FormButton extends React.Component{
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center form-button-cotnainer">
                <button 
                    type="submit" 
                    className="d-flex justify-content-center align-items-center px-4 py-2 form-button"
                    onClick={ this.props.onClick } 
                >
                    { this.props.children }
                    <p className="form-button-text m-0">
                        { this.props.name || 'submit' }
                    </p>
                </button>
            </div>
        )
    }
};