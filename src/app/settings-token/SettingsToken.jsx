import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import { Navigate } from "react-router-dom";

export default class SettingsToken extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            navigate: false,
            to: "../token-data",
            data: [
                [ "0001", "kekkljsdlkdjklds", "type1", "10/05/2020", "10/05/2020", <ItemListButton onClick={ () => this._makeNavigation() } icon="server"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "dkkdkkfdkddkjdkn", "type1", "10/05/2020", "10/05/2020", <ItemListButton onClick={ () => this._makeNavigation() } icon="server"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ]
            ]
        };
    }

    _makeNavigation() {
        this.setState( {
            navigate: true
        } );
    }

    render() {
        return (
            <React.Fragment>
                { this.state.navigate && (
                    <Navigate 
                        to={ this.state.to }
                    />
                ) }
                <ItemList
                    head={ [ "Numéro de token", "valeur", "type", "création", "Mise à jour", "informations", "Modifier", "Supprimer" ] }
                    body={ this.state.data }
                    icon="shield-lock-fill"
                    title="tokens"
                ></ItemList>
            </React.Fragment>
        );
    }
};