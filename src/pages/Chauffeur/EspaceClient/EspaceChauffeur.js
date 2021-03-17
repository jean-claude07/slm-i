import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {Formik, Form, Field, yupToFormErrors} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './espaceclient.css';
import ErrorField from '../../../components/errors/ErrorField';
import Forgot from '../Forgot';
import '../../../components/errors/errors.css'

const LoginSchema = Yup.object().shape({
	nom: Yup.string()
		.min(3, " Votre nom trop court.")
		.required("veuiller saisir votre Nom."),
	prenom: Yup.string()
		.min(3, "Votre prenom est trop court.")
		.required("Veuiller saisir votre prenom."),
	email: Yup.string()
		.lowercase()
		.email('Email invalide  (^_^)')
		.required("Veuiller saisir votre email."),
	telephone: Yup.string()
		.required("Veuiller saisir votre numero.")
		.min(10, "numero incomplet.")
		.max(15, "Numero telephone inconnu."),
	password: Yup.string()
		.min(6, 'Le mot de passe minimum est 6 caractère.')
		.required("Veuiller saisir votre mot de passe."),
	confirm: Yup.string()
		.required("Veuiller saisir votre mot de passe de confirmation.")
		.oneOf([Yup.ref('password')], 'Mot de psse de confirmation incorect.'),
	
});

const SessionChema = Yup.object().shape({
	email: Yup.string()
		.required('Veuiller saisir votre email.')
		.email('Email invalide (^_^)'),
	password: Yup.string()
		.required('Veuiller saisir votre mot de passe .')
});


class EspaceChauffeur extends Component {
	state={
		pdp: null,
		message: '',
		errors: ''
	}

	onChange = event => {
        this.setState({
            pdp: event.target.files[0],
            
        })
	}

	
    render() {
		const errors = this.state.errors
		let required = document.getElementById('required')
		let message = document.getElementById('message')
		if(this.state.errors){
			message.style.display = 'block';
			message.style.animation = 'dongle 1s';
			setTimeout(() => {
				message.style.animation = 'none';
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
                 <> 
                 
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
											axios.post('sessionChauffeur', values).then(response => {
											
												if(response.status === 200){
													localStorage.setItem('token', response.data.token)
													sessionStorage.setItem( 'id', response.data.candidat.id)
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
															<label className="label" for="subject">E-mail</label>
															<Field type="email" className="form-control" name="email" id="subject" placeholder="E-mail" />
															<ErrorField errors={errors} touched={touched} row="email"/>
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

														<div className="message" id="required" >{this.state.message} </div>
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
										<div className="col-md-12">
											<center><Forgot/></center>
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
											email: '',
											pdpcandidat: null,
											password: '',
											confirm: ''
										}}
										validationSchema={LoginSchema}
										onSubmit={(values) => {
											const formData = new FormData();

											formData.append('pdpcandidat', this.state.pdp )
											formData.append('nom', values.nom)
											formData.append('prenom', values.prenom)
											formData.append('email', values.email)
											formData.append('telephone', values.telephone)
											formData.append('password', values.password)

											axios.post('candidatprofiles', formData).then(response => {
                                
												if (response.status === 200) {
												
													localStorage.setItem('token', response.data.token)
													sessionStorage.setItem('id', response.data.candidat.id)
													window.location.reload();
												}else{
													console.log(this.state.errors)
													this.setState({
														errors: response.data.message
													})
												}
											})
										}}
										>
										{({errors , touched}) => (
											<Form className="contactForm">
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
															<label className="label" for="subject">E-mail</label>
															<Field type="email" className="form-control" name="email" id="subject" placeholder="E-mail" />
															<ErrorField errors={errors} touched={touched} row="email"/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">Photo</label>
															<Field type="file" className="form-control" id="photo" name="pdpcandidat" onChange={this.onChange}  required />
															{/* <ErrorField errors={errors} touched={touched} row="pdpcandidat"/> */}
														</div>
													</div>
													<div className="col-md-12">
													<div className="form-group">
															<label className="label" for="subject">Mot de Passe</label>
															<Field type="password" className="form-control" name="password"  placeholder="************" />
															<ErrorField errors={errors} touched={touched} row="password"/>
														</div>
													</div>
													<div className="col-md-12">
													<div className="form-group">
															<label className="label" for="subject">Confirmer mot de passe </label>
															<Field type="password" className="form-control" name="confirm"  placeholder="************" />
															<ErrorField errors={errors} touched={touched} row="confirm"/>
														</div>
													</div>
													<center>
														<div className="message" id="message">{this.state.errors} </div>
													</center>
													<div className="col-md-12">
														<div className="form-group" id="center-button">
															<button type="submit" className="btn btn-primary">Inscription</button>
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
            </>  
        );
    }
}

export default EspaceChauffeur;
