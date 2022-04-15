import React from "react";
import './ItemList.scss';

export default class ItemList extends React.Component{
    constructor( props ) {
        super( props );
        this.counter = 0;
        this.state = {
            head: this.props.head && Array.isArray( this.props.head ) ? this.props.head : [],
            body: this.props.body && Array.isArray( this.props.body ) ? this.props.body : []
        };
    }

    _getId() {
        return this.counter++;
    }

    render() {
        return (
            <div className="d-flex justify-content-start container-lg item-list-maner my-5 pt-3 pb-2">
                <div className="item-list-scroller row h-auto px-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                { this.state.head.map( item => (
                                    <th scope="col"> { item } </th>
                                ) ) }
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.body.map( item => (
                                <tr>
                                    <th scope="row"> { this._getId() } </th>
                                    { item.map( _item => (
                                        <td> { _item } </td>
                                    ) ) }
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};