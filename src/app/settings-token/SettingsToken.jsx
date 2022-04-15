import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";

export default class SettingsToken extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "kekkljsdlkdjklds", "type1", "10/05/2020", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "dkkdkkfdkddkjdkn", "type1", "10/05/2020", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ]
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Numéro de token", "valeur", "type", "création", "Mise à jour", "Modifier", "Supprimer" ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};