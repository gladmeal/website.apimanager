import React from "react";
import ItemList from "../partials/item-list/ItemList";

export default class HistoryFoodStuff extends React.Component{
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
                head={ [ 
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
                 ] }
                body={ this.state.data }
            ></ItemList>
        );
    }
};