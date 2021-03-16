import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';

class Annonce extends Component {
    state={
        photo: null
    }

    handleChange = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    render() {
        var recruteur = this.props.match.params.id
        return (
            <div>
                <section className="breadcrumb">
                    <ul className="contenu">
                        <li className="accueil-lien">
                            <Link to="/" className="accueil-font">Accueil</Link><span className="fa fa-angle-right"></span>
                        </li>
                        <li> Espace réservé - <Link to="/recruteur">Recruteur</Link>  </li>
                    </ul>
                </section>
            <div className="chauffeur">
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <center><h3 className="mb-4">Envoier votre offre</h3></center>
                    <div >
                    <Formik
                            initialValues={{
                                contact: '',
                                poste: '',
                                email: '',
                                reference: '',
                                etablisment: '',
                                contrat: '',
                                province: '',
                                libelle: '',
                                pretention: '',
                                description: '',
                                date_limite: '',
                                profil_rechercher: '',
                                photo: null
                            }}

                        onSubmit={(values, { resetForm }) => {
                            console.log(this.state)
                            const formData = new FormData();
                            formData.append('contact', values.contact)
                            formData.append('recruteur_id', recruteur)
                            formData.append('contrat', values.contrat)
                            formData.append('poste', values.poste)
                            formData.append('email', values.email)
                            formData.append('reference', values.reference)
                            formData.append('etablisment', values.etablisment)
                            formData.append('province', values.province)
                            formData.append('libelle', values.libelle)
                            formData.append('pretention', values.pretention)
                            formData.append('description', values.description)
                            formData.append('date_limite', values.date_limite)
                            formData.append('annoncephoto', this.state.photo)
                            formData.append('profil_rechercher', values.profil_rechercher)
                        
                            axios.post('annonces', formData).then(response => {
                                
                                if (response.status === 201) {
                                    console.log("ok")
                                }
                            })
    
                        }}
                        >
                            <Form>
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="form-group">
                                <label className="label" for="contact1">Ajouter une photo</label>
                                <Field type="file" className="form-control" name="photo" placeholder="" onChange={this.handleChange } required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            
                            <div className="form-group">
                                <label className="label" for="contact1">Telephone</label>
                                <Field type="text" className="form-control" name="contact" placeholder="Telephone" required/>
                            </div>
                        </div>
                        <div className="col-md-6"> 
                            <div className="form-group">
                                <label className="label" for="nom">Poste</label>
                                <Field type="text" className="form-control" name="poste" placeholder="Nom du Poste" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                                <label className="label" for="contact1">Email</label>
                                <Field type="mail" className="form-control" name="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="label" for="association">Référence</label>
                                <Field type="text" className="form-control" name="reference" placeholder="Référence"required/>
                            </div>
                        </div>
                     </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="label" for="nom">Etablisment</label>
                                <Field type="text" className="form-control" name="etablisment" placeholder="Entreprise / Societe / Copérative" required/>
                            </div>
                        </div>
                        <div className="col-md-6"> 
                        <div className="form-group">
                                <label className="label" for="categorie_permis">Contrat</label>
                                <Field className="form-control" as="select" name="contrat" >
                                    <option >Choisir Contrat ...</option>
                                    <option value="CDD">CDD</option>
                                    <option value="CDI">CDI</option>
                                    <option value="Remplaçant">Remplaçant</option>
                                    <option value="Stage">Stage</option>
                                </Field>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label className="label" for="province">Ville / Region</label>
                                <Field as="select" className="form-control" name="province" >
                                    <option >Choisir province ...</option>
                                    <option value="antananarivo">Antananarivo</option>
                                    <option value="fianarantsoa">Fianaratsoa</option>
                                    <option value="toliara">Toliara</option>
                                    <option value="toamasina">Toamasina</option>
                                    <option value="mahajanga">Mahajanga</option>
                                    <option value="antsiranana">Antsiranana</option>
                                </Field>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="label" for="adresse">Libellé du contrat</label>
                                <Field type="text" className="form-control" name="libelle" placeholder="Libellé" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="label" for="ville">Sallaire mensuel</label>
                                <Field type="text" className="form-control" name="pretention" placeholder="Ariary / Fmg" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label className="label" for="ville">Description du poste</label>
                                <Field type="text" className="form-control" name="description" placeholder="Description" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                    <label className="label" for="date_de_naissance">Date limite de candidature</label>
                                     <Field type="date" className="form-control" name="date_limite" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label className="label" for="ville">Profil recherché, délais et modalités de candidature</label>
                                <Field type="text" className="form-control" name="profil_rechercher" placeholder="Profil recherché" required/>
                            </div>
                        </div>
                    </div>
                    
                

                <center>
                    <div className="col-md-12">
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">enregistrer</button>
                            <div className="submitting"></div>
                        </div>
                    </div>
                </center>
                </Form>
                    </Formik>
                <p >
                    <i>NB : Par mesure de sécurité, et afin d'éviter le spamming, vos adresses e-mails ne figureront pas dans l'annonce, les candidats pourront postuler directement sur notre site et vous pouvez gérer les candidatures dans votre espace recruteur.</i>
                </p>     
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Annonce;
