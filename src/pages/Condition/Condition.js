import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Condition.css';
class Condition extends Component {
    render() {
        return (
            <>
            <div>
            <div className="container">
            <div className="txt_condition">
                <h2 className="heading-4">Informations et conditions :</h2>
                <ul className="liste_carree">
                    <li className="style_condition">La diffusion d'une offre est gratuite.</li>
                    <li className="style_condition"><b>Pour augmenter la visibilité de votre annonce</b>, vous pouvez opter pour des options payantes, pour plus d'infos vous pouvez nous contacter <Link to="/contact"><b>en cliquant ici</b></Link>, ou en nous adressant un mail à l'adresse <i><u>slm-i@gmail.com</u></i>
                    </li>
                    <li className="style_condition">La validation d'une annonce se fait manuellement et n'est pas immédiate, elle se fait généralement dans la journée, sauf s'il y a des problèmes avec votre annonce.</li>
                    <li className="style_condition">Le changement fréquent d'identité ou toutes pratiques pour contourner nos règles de validation peuvent entrainer le blocage de votre compte.</li>
                    <li className="style_condition">Il est STRICTEMENT interdit de mettre de fausses annonces et de demander de l'argent aux candidats (sauf si c'est indiqué clairement dans l'annonce), de telles pratiques sont contraires à notre politique et sont possibles de poursuite pour escroquerie.</li>
                </ul>
                <h2> LES MENTIONS OBLIGATOIRES </h2>
                <p>Pour ne pas induire en erreur le candidat, nous imposons au recruteur l’indication de mentions obligatoires dans le contenu de l’offre d’emploi. Ces informations doivent être réelles et vérifiables (lieu de travail, niveau de responsabilité…) :</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <ul>
                                <li className="style_condition"> Une date de publication ou de mise en ligne </li>
                                <li className="style_condition">  Un intitulé de poste </li>
                                <li className="style_condition"> Une référence/numéro d’offre</li>
                                <li className="style_condition"> La description du poste</li>
                                <li className="style_condition"> La localisation du poste</li>
                                <li className="style_condition">L’expérience requise pour le poste (débutant, expérimenté…)</li> 
                                <li className="style_condition">Le type de contrat (CDI, CDD, contrat de professionnalisation, d’apprentissage…) et sa durée</li> 
                                <li className="style_condition"> Une adresse de contact, de réception des CV ou un formulaire pour postuler à l’offre.<br/>
                                À ces mentions obligatoires de base s’ajoute le diplôme ou la qualification pour les professions réglementées.</li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 " id="image-condition">
                         </div>
                    </div>
                </div>
                <div className="content-condition">
                <h2 className="heading-4"> L’utilisateur ne doit pas, sous peine de sanctions pénales, mettre en ligne des contenus illégaux, notamment : </h2>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 " id="image-utilisateur">
                         </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <ul className="style_liste">
                            <li className="style_condition"> faire l’apologie de crimes contre l’humanité ; </li>
                            <li className="style_condition">  inciter à la commission d’acte de terrorisme ou faire leur apologie ;</li>
                            <li className="style_condition">  inciter à haine raciale ;</li>
                            <li className="style_condition">  inciter à la haine à l’égard de personnes à raison de leur sexe, de leur orientation ou identité sexuelle ;</li>
                            <li className="style_condition">  inciter à la haine à l’égard de personnes à raison de leur handicap ; </li>
                            <li className="style_condition">  diffuser de la pornographie, notamment enfantine ; </li>
                            <li className="style_condition">  inciter à la violence, notamment, aux violences faites aux femmes ;</li>
                            <li className="style_condition">  porter atteinte à la dignité humaine ; </li>
                            <li className="style_condition">  proférer des injures ; </li>
                            <li className="style_condition">  alléguer ou imputer un fait qui porte atteinte à l'honneur ou à la considération d'une personne (diffamation) </li>
                            </ul> 
                       </div>
                       
                    </div>
                </div>
                </div>
                        Par ailleurs, l’utilisateur s’engage à ne pas mettre en ligne des contenus inappropriés, notamment : 

                        sans rapport avec l’objet des services de Pôle emploi ;
                        comportant des opinions, politiques, religieuses ou philosophiques ; 
                        contraires aux bonnes mœurs. 
                          
            </div>
        </div> 
    </div>
    </>
        );
    }
}

export default Condition;
