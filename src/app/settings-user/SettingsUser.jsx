import React from "react";
import ItemList from "../partials/item-list/ItemList";

export default class SettingsUser extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "ajout d'un aliment", "user 1", "10/05/2020" ],
                [ "0002", "suppréssion d'un aliment", "user 1", "10/05/2020" ],
                [ "0003", "ajout d'un aliment", "user 1", "10/05/2020" ],
                [ "0004", "ajout d'un aliment", "user 1", "10/05/2020" ],
                [ "0005", "modification d'un aliment", "user 1", "10/05/2020" ],
                [ "0006", "suppréssion d'un aliment", "user 1", "10/05/2020" ],
                [ "0007", "suppréssion d'un aliment", "user 1", "10/05/2020" ],
                [ "0008", "suppréssion d'un aliment", "user 1", "10/05/2020" ],
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ "Numero de transaction", "information", "membre", "date" ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};