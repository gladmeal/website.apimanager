import React from "react";
import ItemList from "../partials/item-list/ItemList";

export default class SettingsTokenData extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "kekkljsdlkdjklds", "type1", "150.50.24.01", "chrome", "10/05/2020", "10:30/46" ],
                [ "0002", "dkkdkkfdkddkjdkn", "type1", "150.50.24.01", "chrome", "10/05/2020", "10:30/25" ]
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Numéro de token", "valeur", "type", "ip", "navigateur", "date", "heure" ] }
                body={ this.state.data }
                icon="shield-fill-exclamation"
                title="informations"
            ></ItemList>
        );
    }
};