import React from "react";
import ItemList from "../partials/item-list/ItemList";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import HistoryFood from "../history-food/HistoryFood";
import ItemListModal from "./../partials/item-list-modal/ItemListModal";
import ItemListImage from "../partials/item-list-image/ItemListImage";

export default class HistoryPlate extends HistoryFood{
    constructor( props ) {
        super( props );
        this.state = {
            modal: false,
            modalData: [ 'cles: 0001', 'Date de création: 10/20/2021', 'Date de Mise à jour: 10/20/2021', 'Créer par: utilisateur 1' ],
            data: [
                [ <ItemListImage/>, "pilé", "pilé", <ItemListButton onClick={ () => this._openModal() } icon="clipboard-plus-fill"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ <ItemListImage/>, "sangha", "sangha", <ItemListButton onClick={ () => this._openModal() } icon="clipboard-plus-fill"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
            ]
        };
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
                    icon="grid-1x2-fill"
                    title="plats"
                    head={ [ "Image", "Nom", "Nourritures", "Infos", "Modifier", "Supprimer" ] }
                    body={ this.state.data }
                ></ItemList>
            </React.Fragment>
        );
    }
};