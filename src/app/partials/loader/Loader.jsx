import React from "react";
import './Loader.scss';

export default class Loader extends React.Component{
    render() {
        return (
            <div className={ `w-100 d-flex align-items-center justify-content-center loader ${ this.props.className }` }>
                { this.props.visible === true && (
                    <React.Fragment>
                        <div className="spinner-border text-primary" role="status"></div>
                        { this.props.title !== undefined && (
                            <div className="loader-title d-flex align-items-center">
                                <p className="m-0 ps-3 d-none d-md-block">
                                    { this.props.title }
                                </p>
                            </div>
                        ) }
                    </React.Fragment>
                ) }
            </div>
        )
    }
};