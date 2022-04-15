import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";

export default class HistoryPlate extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "pilé", "pilé", "10/05/2020", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "sangha", "sangha", "10/05/2020", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Clé", "Nom", "Nourritures", "Création", "Remédiation", "Modifier", "Supprimer" ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};