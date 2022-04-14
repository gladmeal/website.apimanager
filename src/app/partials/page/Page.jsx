import './Page.scss';
import React from "react";

export default class Page extends React.Component{
    render() {
      return (
        <div className="w-100 d-flex flex-column align-items-center page-container">
            { this.props.children }
        </div>
      )
    }
}