import React from "react";
import PageItem from "../partials/page-item/PageItem";
import VerifyUser from "../partials/verify-user/VerifyUser";

export default class SettingsIndex extends React.Component{
    render() {
        return (
            <VerifyUser>
                <div className="container-lg overflow-hidden my-4"> 
                    <div className="row">
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
                                to="/account/settings/user"
                                title="Utilisateur"
                                icon="people-fill"
                                description="Liste des utilisateurs"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <PageItem
                                to="/account/settings/add-user"
                                title="Admin"
                                icon="person-circle"
                                description="Ajouter un utilisateur"
                            />
                        </div>
                    </div>
                </div>
            </VerifyUser>
        );
    }
};