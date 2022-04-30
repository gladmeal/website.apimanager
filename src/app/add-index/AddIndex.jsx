import React from "react";
import PageItem from "../partials/page-item/PageItem";
import VerifyUser from "../partials/verify-user/VerifyUser";

export default class AddIndex extends React.Component{
    render() {
        return (
            <VerifyUser>
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
                                to="/account/add/token"
                                title="Token"
                                icon="shield-fill-check"
                                description="Créer un token"
                            />
                        </div>
                    </div>
                </div>
            </VerifyUser>
        );
    }
};