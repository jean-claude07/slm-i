import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ListDesAnnonces from './ListDesAnnonces';


import MoreProfile from './MoreProfile'
import './profilRecruteur.css';
class ProfilRecruteur extends Component {
    render() {
        const recruteur = this.props.recruteur.recruteur
        const plus = this.props.recruteur.plus
        let infoplus;

        if(plus) {
            infoplus = (
                <div className="container">
                <div>
                    <label><i className="fa fa-home"></i> : </label>
                    <span className="noir val">&nbsp;  </span>
                </div>

                <div>
                    <label>Type : </label>
                    <span className="noir val">&nbsp;  </span>
                </div>

                <div>
                    <label>Detaille sur votre etablisment (text) : </label>
                    <span className="noir val">&nbsp;  </span>
                </div>
            </div>
            )
        }
        let profile;
        if(this.props.recruteur.token === sessionStorage.token ){
            profile = (
                <>
                    <div>
                        <section className="breadcrumb">
                            <ul className="contenu">
                                <li className="accueil-lien">
                                    <Link to="/" className="accueil-font">Accueil</Link><span className="fa fa-angle-right"></span>
                                </li>
                                <li> Espace réservé - <Link to="/profil">Recruteur</Link>  </li>
                            </ul>
                        </section>
                        <div className="container">
                        <nav className="" id="ftco-navbar">
                            <div className="container-fluid">
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span> Menu Recruteur
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                        <Link to={`/annonce/${recruteur.id}`} className="nav-link">Postulé une offre </Link>	
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/condition_general" className="nav-link">Condition general </Link>	
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
                                            
                                                    <ListDesAnnonces annonce={this.props.recruteur.annonce} />
                                            </div>
                                        </div>
                                    </div>  
                                    </div>
                                    <div className="col-md-6">
                                    <div className="row no-gutters">
                                        <div className="col-md-12">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h4>Votre profil: </h4>
                                                <div className="clear"></div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <center>
                                                            <div className="container" >
                                                                <img className="image" src={`https://apimanageur.herokuapp.com/${recruteur && recruteur.pdprecruteur.url}`} controls  />
                                                            </div>
                                                            </center>
                                                            <div className="clear" ></div>
                                                            <div style={{boxShadow: '0 10px 29px 0 rgba(68, 88, 144, 0.2)', borderRadius: '5px', alignItems:'center'}}>
                                                                <div className="noir bolder">Nom responsable:<strong> {recruteur.nom} {recruteur.prenom}</strong></div>
                                                                
                                                            
                                                                <div>
                                                                    <label><i className="fa fa-phone"></i> 1 : + {recruteur.telephone} </label>
                                                                    <span className="noir val"></span>
                                                                </div>
                                                                
                                                                <div>
                                                                    <label><span className="fa fa-envelope"></span> :</label>
                                                                    <span className="noir val">  {recruteur.email} </span>
                                                                </div>
                                                                <div>
                                                                    <label>Entreprise :</label>
                                                                    <span className="noir val">  {recruteur.entreprise} </span>
                                                                </div>
                                                                {infoplus}
                                                                <MoreProfile id={recruteur && recruteur.id}/>
                                                            </div>
                                                        <div id="forma_sort" className="ui-sortable"></div>
                                                        </div>
                                                    </div>
                                    
                                            </div>
                                        </div>
                                    </div>  
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="padding-top"></div>
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

export default ProfilRecruteur;
