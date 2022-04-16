import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";

export default class SettingsUser extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "Jean Jacque", "jeam.jacque@gmail.com", "10/05/2020", 1, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "Marie Curie", "marie.curie@gmail.com", "10/05/2020", 3, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ]
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Numero utilisateur", "nom", "email", "date de création", "type", "modifier", "supprimer" ] }
                body={ this.state.data }
                icon="people-fill"
                title="administrateurs"
            ></ItemList>
        );
    }
};