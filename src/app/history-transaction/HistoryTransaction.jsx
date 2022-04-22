import React from "react";
import ItemList from "../partials/item-list/ItemList";
import axios from "axios";
import Loader from '../partials/loader/Loader';
import AccountError from '../account-error/AccountError';
import moment from "moment";

export default class HistoryTransaction extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [],
            sort: 0,
            isLoadding: false,
            url: '',
            error: '',
            isError: false,
            body: []
        };
    }

    componentDidMount() {
        this.setState( {
            isLoadding: true
        }, () => {
            axios.get( 'api/transaction/all' ).then( ( { data } ) => {
                this.setState( {
                    data: data,
                    isLoadding: false
                } );
            } ).catch( ( { response: { data, status } } ) => {
                return this.setState( {
                    isError: true,
                    isLoadding: false,
                    status
                } );
            } )
        } );
    }

    _setSort( method ) {
        this.setState( {
            sort: method
        } );
    }

    _getHeader() {
        if ( this.state.sort === 0 ) {
            return [ "NUMERO DE TRANSACTION", "INFORMATION", "TABLE", "MEMBRE", "DATE" ];
        }
        return [ "ID", "MEMBRE", "NOMBRE DE TRANSACTION" ];
    }

    _getBody() {
        if ( this.state.sort === 0 ) {
            return this.state.data.map( item => [
                item._id,
                item.infos,
                item.table,
                item.adminID.name,
                moment( item.createdAt ).format( 'MM-DD-YYYY HH:MM a' ),
            ] ).reverse();
        }
        const 
            data = {},
            result = [];
                this.state.data.forEach( item => {
                    if ( !( item.adminID._id in data ) ) {
                        data[ item.adminID._id ] = {
                            name: item.adminID.name,
                            counter: 0
                        };
                    }
                    data[ item.adminID._id ].counter++;
                } );
            for ( const item in data ) {
                result.push( [
                    item,
                    data[ item ].name,
                    data[ item ].counter
                ] );
            }
        return result;
    }

    render() {
        return (
            <React.Fragment>
                { this.state.isError && (
                    <AccountError errorCode={ 403 } errorMessage="you cannot access to this page" />
                ) }
                <ItemList
                    head={ this._getHeader() }
                    body={ this._getBody() }
                    icon="signpost-2-fill"
                    title="transactions"
                    selected={ 0 }
                    options={ [
                        { id: 0, value: 'Original' },
                        { id: 1, value: 'Compter par utilisateur' }
                    ] }
                    onSortMethodChange={ this._setSort.bind( this ) }
                ></ItemList>
                <Loader visible={ this.state.isLoadding } title="chargement..."/>
            </React.Fragment>
        );
    }
};