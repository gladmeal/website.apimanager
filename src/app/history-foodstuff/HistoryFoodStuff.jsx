import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import ItemListModal from "./../partials/item-list-modal/ItemListModal";
import ItemListImage from "../partials/item-list-image/ItemListImage";

export default class HistoryFoodStuff extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            modal: false,
            modalData: [ 'cles: 0001', 'Date de création: 10/20/2021', 'Date de Mise à jour: 10/20/2021', 'Créer par: utilisateur 1' ],
            data: [
                [ <ItemListImage/>, "riz", 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 1.52, 12.4, 2.5, <ItemListButton onClick={ () => this._openModal() } icon="clipboard-plus-fill"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ <ItemListImage/>, "banane", 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 4.5, 8.5, 1.52, 12.4, 2.5, 1.52, 12.4, 2.5, <ItemListButton onClick={ () => this._openModal() } icon="clipboard-plus-fill"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
            ]
        };
    }

    _openModal() {
        this.setState( {
            modal: true
        } );
    }

    _closeModal() {
        this.setState( {
            modal: false
        } );
    }

    render() {
        return (
            <React.Fragment>
                <ItemListModal
                    title="Plus d'informations"
                    visible={ this.state.modal }
                    onClose={ () => this._closeModal() }
                >
                    <span className="mt-5"></span>
                    { this.state.modalData.map( ( item, index ) => (
                        <div key={ index } className="w-100 fs-5 ps-3 mt-4 fw-li ghter">
                            <i className="bi bi-chevron-right me-3"></i>
                            { item }
                        </div>
                    ) ) }
                </ItemListModal>
                <ItemList
                    head={ [ 
                        'Image',
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
                        'plus',
                        'Modifier',
                        'Supprimer'
                    ] }
                    icon="joystick"
                    title="aliments"
                    body={ this.state.data }
                />
            </React.Fragment>
        );
    }
};