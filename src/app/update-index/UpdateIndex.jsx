import React from "react";
import PageItem from "../partials/page-item/PageItem";
import VerifyUser from "../partials/verify-user/VerifyUser";

export default class UpdateIndex extends React.Component{
    render() {
        return (
            <VerifyUser>
                <div className="container-lg overflow-hidden my-4"> 
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <PageItem
                                to="/account/update/foodstuff"
                                title="Aliment"
                                description="Modifier la photo d'un Aliment"
                                icon="stickies-fill"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <PageItem
                                to="/account/update/food"
                                title="Nourriture"
                                description="Modifier la photo d'une Nourriture"
                                icon="shop"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <PageItem
                                to="/account/update/plate"
                                title="Plat"
                                description="Modifier la photo"
                                icon="layout-wtf"
                            />
                        </div>
                    </div>
                </div>
            </VerifyUser>
        );
    }
};