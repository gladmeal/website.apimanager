import './PageItem.scss';
import React from "react";
import { Link } from 'react-router-dom';

export default class PageItem extends React.Component{
    title = 'My title';
    description = 'My short description';
    icon = 'columns-gap';
    
    constructor( props ) {
      super( props );
      this.title = props.title || this.title;
      this.description = props.description || this.description;
      this.icon = props.icon || this.icon;
    }

    render() {
      return (
        <Link to={ this.props.to || '#' } className="w-100 d-flex flex-column justify-content-center align-items-center page-item p-3 m-2">
          <div className="page-item-header d-flex justify-content-center align-items-center mt-3">
            <i className={ `bi bi-${ this.icon }`}></i>
          </div>
          <div className="page-item-body d-flex flex-column justify-content-center align-items-center pb-3 pt-5">
            <h4 className="text-truncate page-item-title"> { this.title } </h4>
            <p className='text-center'> { this.description } </p>
          </div>
        </Link>
      )
    }
}