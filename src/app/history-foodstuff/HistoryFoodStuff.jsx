import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import ItemListModal from "./../partials/item-list-modal/ItemListModal";
import ItemListImage from "../partials/item-list-image/ItemListImage";
import axios from "axios";
import Loader from '../partials/loader/Loader';
import AccountError from '../account-error/AccountError';
import { Navigate } from "react-router-dom";
import FormError from '../partials/form-error/FormError';
import HistoryTransaction from "../history-transaction/HistoryTransaction";
import moment from "moment";

export default class HistoryFoodStuff extends HistoryTransaction{
    constructor( props ) {
        super( props );
        this.state = {
            ...super.state,
            modal: false,
            sort: 0,
            modalData: [],
            head: [],
            body: [],
            data: [],
            url: '',
            error: '',
            navigate: false
        };
    }

    componentDidMount() {
        this.setState( {
            isLoadding: true
        }, () => {
            axios.get( 'api/foodstuff/list?users=true' ).then( ( { data } ) => {
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

    _openModal( item ) {
        this.setState( {
            modalData: [
                `cles: ${ item._id }`,
                `Créé le: ${ moment( item.createdAt ).format( 'MM-DD-YYYY HH:MM a' ) }`,
                `Modifié le: ${ moment( item.updatedAt ).format( 'MM-DD-YYYY HH:MM a' ) }`,
                `Créer par: ${ item.creatorID.name }`,
            ],
            modal: true
        } );
    }

    _getHeader() {
        if ( this.state.sort === 0 ) {
            return [
                'IMAGE',
                'NOM',
                'ENERGIE (kcal)',
                'EAU (g)',
                'PROTEINE (g)',
                'GLUCIDE (g)',
                'FIBRE (g)',
                'CENDRE (g)',
                'LIPIDE (g)',
                'CALCUIM (mg)',
                'ZINC (mg)',
                'AZOTE (mg)',
                'FER (mg)',
                'VITAMINE A(mg)',
                'VITAMINE B(mg)',
                'VITAMINE C(mg)',
                'VITAMINE D(mg)',
                'VITAMINE E(mg)',
                'PLUS',
                'MODIFIER',
                'SUPPRIMER'
            ];
        }
        return [ "ID", "MEMBRE", "NOMBRE DE TRANSACTION" ];
    }

    _getBody() {
        if ( this.state.sort === 0 ) {
            return this.state.data.map( item => [
                <ItemListImage/>,
                item.name,
                item.energy,
                item.water,
                item.protein,
                item.carbohydrate,
                item.fibre,
                item.ash,
                item.fat,
                item.ca,
                item.zn,
                item.n,
                item.fe,
                item.vitamin_a,
                item.vitamin_b,
                item.vitamin_c,
                item.vitamin_d,
                item.vitamin_e,
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

    _closeModal() {
        this.setState( {
            modal: false
        } );
    }

    _update( data ) {
        let end = '';
        const 
            id = data._id,
            name = data.name;
                for( const key in data ) {
                    const 
                        val = data[ key ];
                    if ( [ 'createdAt', 'updatedAt', '_id', 'name', '__v', 'creatorID' ].indexOf( key ) === -1 ) 
                        end += `&${ key }=${ val }`;
                }
        this.setState( {
            url: `../../add/foodstuff?update=true&id=${ id }&name=${ name }${ end }`,
            navigate: true
        } );
    }

    _delete( data )  {
        if ( window.confirm( `Voulez-vous réellement supprimer l'aliment: ${ data.name }?` ) === true ) {
            return this.setState( {
                isLoadding: true
            }, () => (
                axios.delete( `api/foodstuff/delete/${ data._id }` ).then( () => this.setState( {
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
                    head={ this._getHeader() }
                    icon="joystick"
                    title="aliments"
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