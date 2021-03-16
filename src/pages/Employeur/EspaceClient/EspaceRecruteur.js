import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import ErrorField from '../../../components/errors/ErrorField';
import Mdpo from '../Mdpo';
import '../../../components/errors/errors.css'

const RegistrationSchema = Yup.object().shape({
	nom: Yup.string()
		.min(3, "Nom trop court")
		.required("veuiller saisir votre Nom"),
	prenom: Yup.string()
		.min(3, "Votre prenom est trop court")
		.required("Veuiller saisir votre prenom"),
	email: Yup.string()
		.lowercase()
		.email('Email invalide  !!!')
		.required("Veuiller saisir votre email"),
	telephone: Yup.string()
		.required("Veuiller saisir votre numero")
		.min(8, "numero incomplet")
		.max(15, "Numero telephone inconnu"),
	password: Yup.string()
		.min(6, 'Le mot de passe minimum est 6 caractère')
		.required("Veuiller saisir votre mot de passe"),
	confirmation: Yup.string()
		.required("Veuiller saisir votre mot de passe de confirmation")
		.oneOf([Yup.ref('password')], 'Mot de psse de confirmation incorect'),
	entreprise: Yup.string()
		.required('Veuiller indiquer le nom de votre entreprise')
	
});

const SessionChema = Yup.object().shape({
	email: Yup.string()
		.required('Veuiller saisir votre email')
		.email('Email invalide !!!'),
	password: Yup.string()
		.required('Veuiller saisir votre mot de passe ')
});

class EspaceRecruteur extends Component {
	state={
		photo: null,
		message: '',
		flash: ''
	}

	handleChange = event => {
		this.setState({
			photo: event.target.files[0]
		})
	}
    render() {
		let required = document.getElementById('required');
		let errors = document.getElementById('errors');
		if(this.state.flash){
			errors.style.display = 'block';
			errors.style.animation = 'dongle 1s';
			setTimeout(() => {
				errors.style.animation = 'none';
			}, 1000);
		}

		if(this.state.message){
			required.style.display = 'block';
			required.style.animation = 'dongle 1s';
			setTimeout(() => {
				required.style.animation = 'none';
			}, 1000);
		}
        return (
            <div>


            <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6">
                            <div className="row no-gutters">
								<div className="col-md-12">
									<div className="contact-wrap w-100 p-md-5 p-4">
										<h3 className="mb-4">Connexion</h3>

										<Formik
										initialValues={{
											email: '',
											password: ''
										}}
										validationSchema={SessionChema}
										onSubmit={(values) => {
											axios.post('sessionRecruteur', values).then(response => {
									
												if(response.status === 200){
													localStorage.setItem('id', response.data.recruteur.id)
													sessionStorage.setItem( 'token', response.data.token)
													window.location.reload();
												}else{
												
													this.setState({
														flash: response.data.message
													})
												}
											})
										}}
										>
										{({errors, touched}) => (
											<Form method="POST" id="contactForm" name="contactForm" className="contactForm">
												<div className="row">
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">E-mail</label>
															<Field type="email" className="form-control" name="email" id="subject" placeholder="E-mail" />
															<ErrorField errors={errors} touched={touched} row="email" id="required" />
														</div>
													</div>
													<div className="col-md-12">
													<div className="form-group">
															<label className="label" for="subject">Mot de Passe</label>
															<Field type="password" className="form-control" name="password" id="subject" placeholder="************" />
															<ErrorField errors={errors} touched={touched} row="password"/>
														</div>
													</div>
													<div className="col-md-12">
													<fieldset><ReCAPTCHA sitekey="6LdXP9cZAAAAAOjXVT_t6gXbM8gNuQXyvK9qPhr2" /></fieldset>
													</div>
													<div className="col-md-12">

														<div className="message" id="errors">{this.state.flash} </div>
													</div>

													<div className="col-md-12">
														<div className="row">
														<div className="col-md-12">
															<center>
															<div className="form-group">
																<Field type="submit" value="Se connecter" className="btn btn-primary" />
																<div className="submitting"></div>
															</div>
															</center>
														</div>
														
														</div>
													</div>
												</div>
											</Form>)}
										</Formik>
										<div>
											<center>
												<Mdpo/>
											</center>
										</div>
									</div>
								</div>
                               </div>  
                            </div>
                            <div className="col-md-6">
                            <div className="row no-gutters">
								<div className="col-md-12">
									<div className="contact-wrap w-100 p-md-5 p-4">
										<h3 className="mb-4">Inscription</h3>
										<Formik
										initialValues={{
											nom: '',
											prenom: '',
											telephone: '',
											entreprise: '',
											email: '',
											photo: null,
											password: '',
											confirmation: ''
										}}
										validationSchema={RegistrationSchema}
										onSubmit={(values) => {
								
											const formData = new FormData();

											formData.append('pdprecruteur', this.state.photo )
											formData.append('nom', values.nom)
											formData.append('prenom', values.prenom)
											formData.append('entreprise', values.entreprise)
											formData.append('email', values.email)
											formData.append('telephone', values.telephone)
											formData.append('password', values.password)

											axios.post('recruteurs', formData).then(response => {
                                
												if (response.status === 200) {
							
													localStorage.setItem('id', response.data.recruteur.id)
													sessionStorage.setItem( 'token', response.data.token)
													window.location.reload();
												}else{
													this.setState({
														message: response.data.message
													})
												}
											})
										}}
										>
										{({errors, touched}) => (
											<Form method="POST" id="contactForm" name="contactForm" className="contactForm">
												<div className="row">
												<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">Nom</label>
															<Field type="text" className="form-control" name="nom" id="subject" placeholder="Nom" />
															<ErrorField errors={errors} touched={touched} row="nom"/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label className="label" for="subject">Prenom</label>
															<Field type="text" className="form-control" name="prenom" id="subject" placeholder="Prenom" />
															<ErrorField errors={errors} touched={touched} row="prenom"/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label className="label" for="subject">Telephone</label>
															<Field type="number" className="form-control" name="telephone" id="subject" placeholder="Telephone" />
															<ErrorField errors={errors} touched={touched} row="telephone"/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">Société / coperative / Entreprise</label>
															<Field type="text" className="form-control" name="entreprise" id="subject" placeholder="Société / Coperative / Entreprise" />
															<ErrorField errors={errors} touched={touched} row="entreprise"/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">E-mail</label>
															<Field type="email" className="form-control" name="email" id="subject" placeholder="E-mail" />
															<ErrorField errors={errors} touched={touched} row="email"/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">Photo</label>
															<Field type="file" className="form-control" name="photo" onChange={this.handleChange} required />
														</div>
													</div>
													<div className="col-md-12">
													<div className="form-group">
															<label className="label" for="subject">Mot de Passe</label>
															<Field type="password" className="form-control" name="password" id="subject" placeholder="************" />
															<ErrorField errors={errors} touched={touched} row="password"/>
														</div>
													</div>
													<div className="col-md-12">
													<div className="form-group">
															<label className="label" for="subject">Confirmer mot de passe </label>
															<Field type="password" className="form-control" name="confirmation" id="subject" placeholder="************" />
															<ErrorField errors={errors} touched={touched} row="confirmation"/>
														</div>
													</div>
													<div className="message" id="required" >{this.state.message} </div>
													<div className="col-md-12">
													
															<div className="form-group" id="center-button">
																<Field type="submit" value="Inscription" className="btn btn-primary" />
																<div className="submitting">
															</div>
													
														</div>
													</div>
												</div>
											</Form>)}
										</Formik>
									</div>
								</div>
                               </div>  
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default EspaceRecruteur;
