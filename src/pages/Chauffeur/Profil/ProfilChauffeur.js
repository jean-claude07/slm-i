import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './profilChaufeur.css';
import MoreProfile from './MoreProfile';

class ProfilChauffeur extends Component {
        // state={
        //     plus: this.props.prophile
        // }

    render() {
        console.log(this.props.prophile )
        const plus = this.props.prophile.plus
        const candidat = this.props.prophile.candidat
        let infoplus;

        if(plus){
            infoplus = (
                <div className="container">
                    <div>
                        <label><i className="fa fa-home"></i> : </label>
                        <span className="noir val">&nbsp; {plus.adresse} </span>
                    </div>

                    <div>
                        <label>Niveau d'étude : </label>
                        <span className="noir val">&nbsp; {plus.etude} </span>
                    </div>

                    <div>
                        <label>experience : </label>
                        <span className="noir val">&nbsp; {plus.experience} </span>
                    </div>
                </div>
            )
        }
        // const image = this.state.candidat.pdpcandidat
       let profile;
       if(this.props.prophile.token === localStorage.token ){
            profile = (
                <>
                     <section className="breadcrumb">
                    <ul className="contenu">
                        <li className="accueil-lien">
                            <Link to="/" className="accueil-font">Accueil</Link><span className="fa fa-angle-right"></span>
                        </li>
                        <li> Espace réservé - <Link to="/candidat">Chauffeur</Link>  </li>
                    </ul>
                   
                </section>
                <h2 className="titre-chauffeur">Espace réservé - Chauffeur</h2>
                <div className="container">
                <nav className="" id="ftco-navbar">
                    <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu chauffeur
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link to={`/postuler/${candidat && candidat.id}`} className="nav-link">Candidatures envoyés </Link>	
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Candidat</Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                    </div>
                </nav>

                    
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6">
                            <div className="row no-gutters">
								<div className="col-md-12">
									<div className="contact-wrap w-100 p-md-5 p-4">
                                    
											<div className="row">
                                                <div className="col-md-12">
                                                <div>
                                                <h4><i className="fa fa-clock-o" aria-hidden="true"></i> Annonce suivis</h4>
                                                    Date : <span className="noir">11/12/2020</span>
                                                </div>
                                                <div className="noir">Vous avez sauvegardé l'annonce :</div>
                                                <div className="noir bolder">Mirindra</div>
                                                <div className="noir bolder">Poste :</div>
                                                <div className="cls_annonce_save">CHARGE MARKETING DIGITAL PRODUCTIF</div>
												</div>
											</div>
									</div>
								</div>
                               </div>  
                            </div>
                            <div className="col-md-6">
                            <div className="row no-gutters">
								<div className="col-md-12">
									<div className="contact-wrap w-100 p-md-5 p-4">
                                    <h4>Votre profil 
                                        </h4>
										
											<div className="row">
                                                <div className="col-md-12">
                                                <center>
                                                    <div className="container">
                                                        <img className="image" src={`https://apimanageur.herokuapp.com/${candidat && candidat.pdpcandidat.url}`} />
                                                    </div>
                                                </center>
                                                <div className="clear"></div>
                                                <div >
                                                    <div className="noir bolder">Nom :<strong> {candidat && candidat.nom}</strong> </div>
                                                    <div className="noir bolder">Prenom :<strong> {candidat && candidat.prenom} </strong> </div>
                                                   
                                                    <div>
                                                        <label><i className="fa fa-phone"> </i> : +{ candidat && candidat.telephone} </label>
                                                        <span className="noir val"></span>
                                                    </div>
                                                    <div>
                                                        <label><span className="fa fa-envelope"></span> : </label>
                                                        <span className="noir val"> {candidat && candidat.email} </span>
                                                    </div>
                                                
                                                    <div id="forma_sort" className="ui-sortable"></div>
                                                        {infoplus}
                                                    <br/>
                                                        <MoreProfile id={candidat && candidat.id}/>
                                                        
                                                    </div>
                                                </div>
											</div>
							
									</div>
								</div>
                               </div>  
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                </>
            )
       }else{
           profile = (
               <>
               <div className="spinner">
                    <div className="d-flex align-items-center">
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
               </>
           )
       }
        return (
            <div>
               {profile}
            </div>
        );
    }
}

export default ProfilChauffeur;
