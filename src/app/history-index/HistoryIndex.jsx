import React from "react";
import PageItem from "../partials/page-item/PageItem";

export default class HistoryIndex extends React.Component{
    render() {
        return (
            <div className="container-lg overflow-hidden my-4"> 
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/history/transaction"
                            title="Transaction"
                            description="Liste des transactions"
                            icon="signpost-2-fill"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/history/foodstuff"
                            title="Aliment"
                            description="Liste des Aliments"
                            icon="joystick"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/history/food"
                            title="Nourriture"
                            description="Liste des Nourritures"
                            icon="shop-window"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/history/plate"
                            title="Plat"
                            icon="grid-1x2-fill"
                            description="Liste des plats"
                        />
                    </div>
                </div>
            </div>
        );
    }
};