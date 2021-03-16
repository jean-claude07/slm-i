import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';


export class AddChauffeur extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: null,
            permis: null,
            cv: null
        }
    }

    onPhoto = event => {
        this.setState({
            photo: event.target.files[0],
            
        })
        console.log(event.target.files[0])
    }

    onPermis = event => {
        this.setState({
            permis: event.target.files[0],
            
        })
    }

    onCV = event => {
        this.setState({
            cv: event.target.files[0],
            
        })
    }
    render() {
        const photo = this.state.photo
        const permis = this.state.permis
        const cv = this.state.cv
        return (
            <>
            <section className="breadcrumb">
            <ul className="contenu">
                <li className="accueil-lien">
                    <Link to="/" className="accueil-font">Accueil</Link><span className="fa fa-angle-right"></span>
                </li>
                <li> Espace réservé - <Link to="/candidat">Chauffeur</Link>  </li>
            </ul>
        </section>
            <div className="chauffeur">
                <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Postulé votre profil</h3>
                        <Formik
                        initialValues={{
                            contact1: '',
                            contact2: '',
                            nom: '',
                            prenom: '',
                            categorie_permis: '',
                            date_de_naissance: '',
                            association: '',
                            adresse: '',
                            ville: '',
                            province: '',
                            fumeur: '',
                            alcolique: '',
                            marie: '',
                            nombre_enfant: '',
                            port_lunette: '',
                            annee_de_debut: '',
                            salaire_envisager: '',
                            disponible: '',
                            observation: '',
                            photo: null,
                            permis: null,
                            cv: null
                        }}

                        onSubmit={(values, { resetForm }) => {
                            console.log(this.state)
                            const formData = new FormData();
                            formData.append('photo', photo)
                            formData.append('permis', permis)
                            formData.append('cv', cv)
                            formData.append('contact1', values.contact1)
                            formData.append('contact2', values.contact2)
                            formData.append('nom', values.nom)
                            formData.append('prenom', values.prenom)
                            formData.append('categorie_permis', values.categorie_permis)
                            formData.append('brith', values.date_de_naissance)
                            formData.append('club', values.association)
                            formData.append('adresse', values.adresse)
                            formData.append('ville', values.ville)
                            formData.append('province', values.province)
                            formData.append('candidatprofile_id', this.props.match.params.id)
                            formData.append('fumeur', values.fumeur)
                            formData.append('alcolique', values.alcolique)
                            formData.append('marie', values.marie)
                            formData.append('nombre_enfant', values.nombre_enfant)
                            formData.append('port_lunette', values.port_lunette)
                            formData.append('annee_de_debut', values.annee_de_debut)
                            formData.append('salaire_envisager', values.salaire_envisager)
                            formData.append('disponible', values.disponible)
                            formData.append('observation', values.observation)
                        
                            axios.post('chauffeurs', formData).then(response => {
                                
                                if (response.status === 201) {
                                    resetForm();
                                }
                            })
    
                        }}
                        >
                            <Form className="contactForm">
                                <div >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="contact1">contact1</label>
                                                <Field type="text" className="form-control" name="contact1" placeholder="contact" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                            <div className="form-group">
                                                <label className="label" for="contact2">contact2</label>
                                                <Field type="text" className="form-control" name="contact2" placeholder="contact" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="nom">nom</label>
                                                <Field type="text" className="form-control" name="nom" placeholder="Nom" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="premon">Prenom</label>
                                                <Field type="text" className="form-control" name="prenom" placeholder="Prenom" required/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="categorie_permis">Categorie permis</label>
                                                <Field className="form-control" as="select" name="categorie_permis" >
                                                    <option >Choisir categorie ...</option>
                                                    <option value="categorie A">Categorie A</option>
                                                    <option value="categorie B">Categorie B</option>
                                                    <option value="categorie C">Categorie C</option>
                                                    <option value="categorie D">Categorie D</option>
                                                    <option value="categorie E">Categorie E</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                            <div className="form-group">
                                                <label className="label" for="date_de_naissance">Date de naissance</label>
                                                <Field type="date" className="form-control" name="date_de_naissance" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="association">Association</label>
                                                <Field type="text" className="form-control" name="association" placeholder="Association"required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="adresse">Adresse</label>
                                                <Field type="text" className="form-control" name="adresse" placeholder="Adresse" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="ville">Ville</label>
                                                <Field type="text" className="form-control" name="ville" placeholder="Ville" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="province">Province</label>
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
                                    </div>
                                </div>
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="fumeur">Fumeur ?</label>
                                                <Field as="select" className="form-control" name="fumeur" >
                                                    <option >Choisir la reponse ...</option>
                                                    <option value="oui">OUI</option>   
                                                    <option value="non">NON</option>
                                                </Field> 
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                            <div className="form-group">
                                                <label className="label" for="alcolique">Experience professionnel</label>
                                                <Field as="select" className="form-control" name="alcolique" >
                                                    <option >Choisir la reponse ...</option>
                                                    <option value="Debutant">Debutant</option>
                                                    <option value="Intermediaire">Intermediaire</option>
                                                    <option value="Confirmer">Confirmer</option>
                                                    <option value="Experimenté">Experimenté</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="marie">Marié</label>
                                                <Field as="select" className="form-control" name="marie" >
                                                    <option>Choisir la reponse ...</option>
                                                    <option value="oui">OUI</option>
                                                    <option value="non">NON</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="nombre_enfant">Nombre  d ' enfant</label>
                                                <Field type="number" className="form-control" name="nombre_enfant" placeholder="nombre d'enfant"required/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="port_lunnette">Port des lunettes</label>
                                                <Field as="select" className="form-control" name="port_lunnette" >
                                                    <option >Choisir la reponse ...</option>
                                                    <option value="oui">OUI</option>
                                                    <option value="non">NON</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                            <div className="form-group">
                                                <label className="label" for="annee_de_debut">Année de debut</label>
                                                <Field type="date" className="form-control" name="annee_de_debut" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="salaire_envisager">Salaire envisager</label>
                                                <Field type="text" className="form-control" name="salaire_envisager" placeholder="Pretention salarial ..."required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="disponible">Disponible</label>
                                                <Field as="select" className="form-control" name="disponible" >
                                                    <option >Choisir la reponse ...</option>
                                                    <option value="oui">OUI</option>
                                                    <option value="non">NON</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="observation">Observation</label>
                                                <Field type="text" className="form-control" name="observation" placeholder="Observation"required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" >Photo</label>
                                                <Field type="file" className="form-control" name="photo" onChange={this.onPhoto}required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" >Permis</label>
                                                <Field type="file" className="form-control" name="permis" onChange={this.onPermis} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" >C.V</label>
                                                <Field type="file" className="form-control" name="cv" onChange={this.onCV} required/>
                                            </div>
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
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default AddChauffeur;
