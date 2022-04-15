import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";

export default class SettingsUser extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "ajout d'un aliment", "user 1", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "suppréssion d'un aliment", "user 1", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ]
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Numero utilisateur", "email", "date de création", "type", "modifier", "supprimer" ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};