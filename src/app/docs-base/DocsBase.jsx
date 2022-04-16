import React from "react";
import Page from "../partials/page/Page";
import MainNav from "../partials/main-nav/MainNav";
import './DocsBase.scss';

export default class DocsBase extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            url: 'https://admin-gladmeal.web.app/',
            foodstuff: [ {
                name: 'food name',
                energy: 'en (kcal)',
                ash: 'en (g)',
                fat: 'en (g)',
                protein: 'en (g)',
                carbonydrate: 'en (g)',
                fibre: 'en (g)',
                water: 'en (g)',
            }, ]
        };
    }

    render() {
        return (
            <Page>
                <MainNav />
                <div className="container-sm my-5 px-3">
                    <div className="container content-doc-list py-4 px-4 pb-5">
                        <section className="doc-item-title d-flex align-items-center mt-2">
                            <i className="bi bi-layer-backward me-3"></i>
                            <p className="m-0"> historique </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                L'historique représente la list des requêtes faites avec une token,
                                donné elle contient les <span>informations</span> telles, l'adresse ip de du client
                                qui a utilisé la requête, les informations de ce client et le <span> date</span> 
                                et <span> l'heure </span> aux quelles la requête a été faite.
                            </p>
                        </section>
                        <section className="doc-item-title d-flex align-items-center mt-5">
                            <i className="bi bi-app-indicator me-3"></i>
                            <p className="m-0"> Mise à jour </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                Lorsque les mises à jours sont activés pour un plan d'api, le propriétaire 
                                aura ses informations (liste des ressources serveur de son api: <span> nourritures, 
                                aliments, plats </span> ) misent à jour au fure et à mesure de l'évolution des données
                                que contiennent les <span> api </span>. <br />
                                le cas échéllan, il ne pourra que accéder aux données ajoutées au serveur avant la création 
                                de son token, les corrections et suppréssions ne seront pas prises en compte pour les 
                                informations qu'il recevra.
                            </p>
                        </section>
                        <section className="doc-item-title d-flex align-items-center mt-5">
                            <i className="bi bi-aspect-ratio-fill me-3"></i>
                            <p className="m-0"> Le nombre de requêtes </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                Le nombre de requête, represente <span> le nombre maximun de requêtes </span> qu'un utilisateur
                                possédant un token peut faire avec lui <span>par jour</span>. <br />
                                Ce nombre dépent du plan d'api choisi. Et est modifiable dans le cas d'une mise à jour du plan
                                d'api.
                            </p>
                        </section>
                        <section className="doc-item-title d-flex align-items-center mt-5">
                            <i className="bi bi-speedometer me-3"></i>
                            <p className="m-0"> La vitesse </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                La vitesse d'une requéte dépend de deux choses qui 
                                varient selon <span> le plan d'api </span>:
                            </p>
                            <ul>
                                <li> <b>La bande passante</b>: selon le plan une bande passante maximale vous sera attribué </li>
                                <li> 
                                    <b> Le filtrage </b>: plus le <span> plan est élevé moins les données sont filtrées </span> ce qui accélère 
                                    grandement la vitesse d'une requête.
                                </li>
                            </ul>
                        </section>
                        <hr className="mt-5" />
                        <section className="doc-item-title d-flex justify-content-center w-100 align-items-center mt-4">
                            <i className="bi bi-stars me-3"></i>
                            <p className="m-0 w-auto"> Gestion des APIS </p>
                        </section>
                        <hr className="mt-4" />
                        <section className="doc-item-title d-flex align-items-center mt-5">
                            <i className="bi bi-ui-checks me-3"></i>
                            <p className="m-0"> Liste des aliments </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                Pour récuperer une liste d'aliments il faut
                                faire une <span> requête </span> à l'url.
                            </p>
                            <code className="mt-4 p-4 d-block">
                                { this.state.url }client/foodstuff/
                            </code>
                            <p className="mt-3">     
                                Le resultat est un tableau d'objets JSON 
                            </p>
                            <code className="mt-3 p-4 d-block">
                                <pre>
                                { JSON.stringify( this.state.foodstuff, null, 4 ) }
                                </pre>
                            </code>
                        </section>
                        <section className="doc-item-title d-flex align-items-center mt-5">
                            <i className="bi bi-shop me-3"></i>
                            <p className="m-0"> Liste de nourritures </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                Pour récuperer une liste de nourritures il faut
                                faire une <span> requête </span> à l'url.
                            </p>
                            <code className="mt-4 p-4 d-block">
                                { this.state.url }client/food/
                            </code>
                        </section>
                        <section className="doc-item-title d-flex align-items-center mt-5">
                            <i className="bi bi-stickies-fill me-3"></i>
                            <p className="m-0"> Liste de plats </p>
                        </section>
                        <section className="doc-item pt-4 ps-3 mt-2">
                            <p>     
                                Pour récuperer une liste de plats il faut
                                faire une <span> requête </span> à l'url.
                            </p>
                            <code className="mt-4 p-4 d-block">
                                { this.state.url }client/plate/
                            </code>
                        </section>
                    </div>
                </div>
            </Page>
        );
    }
};