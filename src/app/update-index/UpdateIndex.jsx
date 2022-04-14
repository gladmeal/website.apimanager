import React from "react";
import PageItem from "../partials/page-item/PageItem";

export default class UpdateIndex extends React.Component{
    render() {
        return (
            <div className="container-lg overflow-hidden my-4"> 
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/update/foodstuff"
                            title="Aliment"
                            description="Mettre à jour un Aliment"
                            icon="stickies-fill"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/update/food"
                            title="Nourriture"
                            description="Mettre à jour une Nourriture"
                            icon="shop"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <PageItem
                            to="/account/update/plate"
                            title="Plat"
                            description="Mettre à jour un plat"
                        />
                    </div>
                </div>
            </div>
        );
    }
};