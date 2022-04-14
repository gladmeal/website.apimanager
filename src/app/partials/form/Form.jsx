import React from "react";
import './Form.scss';

export default class Form extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            icon: this.props.icon || 'steam',
            title: this.props.title || 'My title'
        };
    }

    render() {
        return (
            <div className="d-flex justify-content-center container-lg form-manager my-4 py-4">
                <div className="form-manager-icon d-none d-md-flex justify-content-center align-items-center mx-5">
                    <i className={ `bi bi-${ this.state.icon }` }></i>
                </div>
                <form
                    className="d-flex flex-column align-items-center p-3 py-4"
                    onSubmit={ this.props.onSubmit }
                >
                    <div className="d-flex flex-column w-100 form-data-container">
                        <div className="form-head d-flex align-items-center">
                            <p className="d-flex align-items-center text-truncate w-100 ps-md-2">
                                <i className="bi bi-chevron-right me-1 me-md-4"></i>
                                { this.state.title }
                            </p>
                        </div>
                        <div className="form-body d-flex flex-column align-items-center justify-content-center pb-3 pt-4 px-md-4">
                            { this.props.children }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};