import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";

export default class HistoryFood extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "pilé", "plantain-haricot", "10/05/2020", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "sangha", "mais-folon", "10/05/2020", "10/05/2020", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Clé", "Nom", "Aliments", "Création", "Remédiation", "Modifier", "Supprimer" ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};