import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";

export default class HistoryFoodStuff extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            data: [
                [ "0001", "riz", 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 1.52, 12.4, 2.5, "10/20/2021", "10/20/2021", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ "0002", "banane", 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 1.52, 12.4, 2.5, "10/20/2021", "10/20/2021", <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
            ]
        };
    }

    render() {
        return (
            <ItemList
                head={ [ 
                    'clé',
                    'Nom',
                    'Energie (kcal)',
                    'Eau (g)',
                    'Protéine (g)',
                    'Glucide (g)',
                    'Fibre (g)',
                    'Cendre (g)',
                    'Lipide (g)',
                    'Calcuim (mg)',
                    'Zinc (mg)',
                    'Azote (mg)',
                    'Fer (mg)',
                    'Vitamine A(mg)',
                    'Vitamine B(mg)',
                    'Vitamine C(mg)',
                    'Vitamine D(mg)',
                    'Vitamine E(mg)',
                    'création',
                    'remédiation',
                    'Modifier',
                    'Supprimer'
                 ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};