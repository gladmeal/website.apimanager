import React from "react";
import './FormError.scss';

export default class FormError extends React.Component{
    render() {
        return (
            <div className={ `w-100 d-flex align-items-center justify-content-center form-error ${ this.props.className }` }>
                { this.props.title && this.props.title !== undefined && (
                    <p className="text-danger text-center"> { this.props.title } </p>
                ) }
            </div>
        )
    }
};