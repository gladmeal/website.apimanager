import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import HistoryFood from "../history-food/HistoryFood";
import ItemListModal from "./../partials/item-list-modal/ItemListModal";
import ItemListImage from "../partials/item-list-image/ItemListImage";
import Loader from "../partials/loader/Loader";
import axios from "axios";
import AccountError from '../account-error/AccountError';
import { Navigate } from "react-router-dom";
import FormError from '../partials/form-error/FormError';

export default class HistoryPlate extends HistoryFood{
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            modal: false,
            sort: 0,
            modalData: [],
            data: []
        };
    }

    componentDidMount() {
        this.setState( {
            isLoadding: true
        }, () => {
            axios.get( 'api/plate/list?users=true&foodstuffs=true&foods=true' ).then( ( { data } ) => {
                this.setState( {
                    data,
                    isLoadding: false
                } )
            } ).catch( () => {
                this.setState( {
                    isError: true,
                    isLoadding: false
                } )
            } )
        } )
    }

    _getHeader() {
        if ( this.state.sort === 0 ) {
            return [ "IMAGE", "NOM", "NOURRITURES & ALIMENTS", "INFOS", "MODIFIER", "SUPPRIMER" ];
        }
        return [ "ID", "MEMBRE", "NOMBRE DE TRANSACTION" ];
    }

    _getFoods( list = [] ) { 
        return list.map( item => (
            item.name.concat( ' (' ).concat( this._getFoodStuffs( item.foodstuffs ) ).concat( ')' )
        ) ).join( ', ' );
    }

    _getBody() {
        if ( this.state.sort === 0 ) {
            return this.state.data.map( item => [
                <ItemListImage/>,
                item.name,
                this._getFoods( item.foods ),
                <ItemListButton onClick={ this._openModal.bind( this, item ) } icon="clipboard-plus-fill"/>, 
                <ItemListButton onClick={ this._update.bind( this, item ) } icon="pencil-square"/>,
                <ItemListButton onClick={ this._delete.bind( this, item ) } icon="x-octagon-fill"/>
            ] ).reverse();
        }
        const 
            data = {},
            result = [];
                this.state.data.forEach( item => {
                    if ( !( item.creatorID._id in data ) ) {
                        data[ item.creatorID._id ] = {
                            name: item.creatorID.name,
                            counter: 0
                        };
                    }
                    data[ item.creatorID._id ].counter++;
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

    _update( data ) {
        let end = '';
        const 
            id = data._id,
            name = data.name,
            foods = data.foods.map( item => item._id ).join( ';' );
                for( const key in data ) {
                    const 
                        val = data[ key ];
                    if ( [ 'createdAt', 'updatedAt', '_id', 'name', '__v', 'creatorID', 'foods' ].indexOf( key ) === -1 ) 
                        end += `&${ key }=${ val }`;
                }
        this.setState( {
            url: `../../add/plate?update=true&id=${ id }&name=${ name }&foods=${ foods }${ end }`,
            navigate: true
        } );
    }

    _delete( data )  {
        if ( window.confirm( `Voulez-vous réellement supprimer le plat: ${ data.name }?` ) === true ) {
            return this.setState( {
                isLoadding: true
            }, () => (
                axios.delete( `api/plate/delete/${ data._id }` ).then( () => this.setState( {
                    url: '../',
                    navigate: true,
                } ) ).catch( ( { response: { data } } ) => {
                    this.setState( {
                        isLoadding: false,
                        error: data.msg
                    } )
                } )
            ) )
        }
    }

    render() {
        return (
            <React.Fragment>
                <ItemListModal
                    title="Plus d'informations"
                    visible={ this.state.modal }
                    onClose={ () => this._closeModal() }
                >
                    <span className="mt-5"></span>
                    { this.state.modalData.map( ( item, index ) => (
                        <div key={ index } className="w-100 fs-5 ps-3 mt-4 fw-li ghter">
                            <i className="bi bi-chevron-right me-3"></i>
                            { item }
                        </div>
                    ) ) }
                </ItemListModal>
                <ItemList
                    icon="grid-1x2-fill"
                    title="plats"
                    head={ this._getHeader() }
                    visible={ !this.state.isError }
                    body={ this._getBody() }
                    selected={ 0 }
                    options={ [
                        { id: 0, value: 'Original' },
                        { id: 1, value: 'Compter par utilisateur' }
                    ] }
                    onSortMethodChange={ this._setSort.bind( this ) }
                >
                    { this.state.isError && (
                        <AccountError errorCode={ 403 } errorMessage="you cannot access to this page" />
                    ) }
                    { this.state.navigate && (
                        <Navigate to={ this.state.url } />
                    ) }
                    <Loader visible={ this.state.isLoadding } title="chargement..."/>
                    <FormError title={ this.state.error } />
                </ItemList>
            </React.Fragment>
        );
    }
};