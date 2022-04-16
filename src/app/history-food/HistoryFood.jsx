import React from "react";
import ItemList from "../partials/item-list/ItemList";
import HistoryFoodStuff from "../history-foodstuff/HistoryFoodStuff";
import ItemListButton from "../partials/item-list-button/ItemListButton";
import ItemListModal from "./../partials/item-list-modal/ItemListModal";
import ItemListImage from "../partials/item-list-image/ItemListImage";
import Loader from "../partials/loader/Loader";


export default class HistoryFood extends HistoryFoodStuff{
    constructor( props ) {
        super( props );
        this.state = {
            modal: false,
            modalData: [ 'cles: 0001', 'Date de création: 10/20/2021', 'Date de Mise à jour: 10/20/2021', 'Créer par: utilisateur 1' ],
            data: [
                [ <ItemListImage/>, "pilé", "plantain-haricot", <ItemListButton onClick={ () => this._openModal() } icon="clipboard-plus-fill"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
                [ <ItemListImage/>, "sangha", "mais-folon", <ItemListButton onClick={ () => this._openModal() } icon="clipboard-plus-fill"/>, <ItemListButton icon="pencil-square"/>, <ItemListButton icon="x-octagon-fill"/> ],
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
                    icon="shop-window"
                    title="nourritures"
                    head={ [ "Image", "Nom", "Aliments", "Infos", "Modifier", "Supprimer" ] }
                    body={ this.state.data }
                    selected={ 0 }
                    options={ [
                        { id: 0, value: 'Original' },
                        { id: 1, value: 'Utilisateur' },
                    ] }
                    onSortMethodChange={ item => console.log( item ) }
                ></ItemList>
                <Loader visible={ false } title="chargment..." />
            </React.Fragment>
        );
    }
};