import React from "react";
import './Home.scss';
import PageItem from "../partials/page-item/PageItem";

export default class Home extends React.Component{
    render() {
        return (
            <div className="container-lg overflow-hidden my-4"> 
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/add/foodstuff"
                            title="Aliment"
                            description="Ajouter un Aliment"
                            icon="stickies-fill"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/add/food"
                            title="Nourriture"
                            description="Ajouter une Nourriture"
                            icon="shop"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/add/plate"
                            title="Plat"
                            description="Ajouter un plat"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/add/user"
                            title="User"
                            icon="person-circle"
                            description="Ajouter un utilisateur"
                        />
                    </div>
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
                            to="/account/settings/token"
                            title="Token"
                            description="Manipulation des tokens"
                            icon="shield-lock-fill"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/settings/me"
                            title="Mon Compte"
                            description="Modifiers mes informations"
                            icon="gear-fill"
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