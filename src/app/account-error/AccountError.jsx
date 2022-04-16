import React from "react";
import './AccountError.scss';

export default class AccountError extends React.Component{
    render() {
        return (
            <div className="container-sm py-5 root-container">
                <div className="w-100 content-error p-3 d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-terminal-fill"></i>
                    <p className="text-center mb-5 mt-3"> 
                        { this.props.errorCode || '404' } 
                        <br /> { this.props.errorMessage || 'page not found' } 
                    </p>
                </div>
            </div>
        );
    }
};