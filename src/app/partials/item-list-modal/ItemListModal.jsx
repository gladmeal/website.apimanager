import React from "react";
import './ItemListModal.scss';

export default class ItemListModal extends React.Component{
    render() {
        return (
            <div
                className={ `position-fixed w-100 h-100 justify-content-center align-content-center form-control-modal ${ this.props.visible ? 'd-flex': 'd-none' }`}
            >
                <div className="d-flex flex-column form-modal-data-container p-3">
                    <div className="d-flex form-modal-head align-items-center border-bottom pb-3">
                        <div className="form-modal-head-brand ps-3">
                            { this.props.title || 'My title' }
                        </div>
                        <div 
                            className="form-modal-button d-flex justify-content-center align-items-center mx-3"
                            onClick={ this.props.onClose }
                        >
                            <i className="bi bi-x-octagon-fill"></i>
                        </div>
                    </div>
                    <div className="d-flex flex-column form-modal-body align-items-center">
                        { this.props.children } 
                    </div>
                </div>
            </div>
        )
    }
};