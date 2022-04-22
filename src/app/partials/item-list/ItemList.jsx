import React from "react";
import './ItemList.scss';
import FormControl from "../form-control/FormControl";

export default class ItemList extends React.Component{
    constructor( props ) {
        super( props );
        this.counter = 0;
        this.state = {
            icon: this.props.icon || 'globe2',
            title: this.props.title || 'List title'
        };
    }

    _getId() {
        return this.counter++;
    }

    _isVisible() {
        return typeof this.props.visible === 'boolean' ? this.props.visible : true;
    }

    render() {
        return (
            <div className="w-100">
                <div className="w-100 d-flex justify-content-center align-items-center item-list-head mt-5">
                    <div className="item-list-icon d-flex justify-content-center align-items-center">
                        <i className={ `bi bi-${ this.state.icon }`}></i>
                    </div>
                    <p className="m-0 ms-3"> { this.state.title } </p>
                </div>
                { ( this.props.options || [ ] ).length !== 0 && (
                    <div className="container-lg px-4 d-flex justify-content-between align-items-center item-list-sort mt-3">
                        <span className="item-list-sort-brand text-uppercase d-flex align-items-center">
                            <i className="bi bi-sliders2 me-3"></i>
                            Trier
                        </span>
                        <div className="content-form-sort d-flex">
                            <FormControl
                                type="select"
                                selected={ this.props.selected }
                                multiple={ false }
                                onChange={ this.props.onSortMethodChange }
                                options={ this.props.options || [] }
                                id="sort"
                                name="methode"
                                label="Methode"
                            />
                        </div>
                    </div>
                ) }
                { this._isVisible() && (
                    <div className="d-flex justify-content-start container-lg item-list-manager mb-5 mt-4 pt-1 pb-2">
                        <div className="item-list-scroller row h-auto px-3">
                            <table className="table shadow">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        { this.props.head.map( ( item, index ) => (
                                            <th scope="col" key={ `th-${ index }` }> { item } </th>
                                        ) ) }
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.props.body.map( ( item, index ) => (
                                        <tr key={ `tr-${ index }` }>
                                            <th scope="row" key={ `th--${ index }` }> { this._getId() } </th>
                                            { item.map( ( _item, _index ) => (
                                                <td key={ `td-${ index }-${ _index }` }> { _item } </td>
                                            ) ) }
                                        </tr>
                                    ) ) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) }
                { this.props.children }
            </div>
        )
    }
};