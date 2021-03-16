import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import './contact.css'
export class Contact extends Component {
    state={
        message: null,
        invalide: ''
    }

    onChange = e => {
        console.log(e.target.value)
        this.setState({
            message: e.target.value
        })
    }
    render() {
        console.log(this.state.invalide)
        return (
            <div>
            <section className="hero-wrap hero-wrap-2">
            <div className="overlay" id="img-contact"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 ftco-animate mb-0 text-center">
                    <p className="breadcrumbs mb-0"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>Contact Us <i className="fa fa-chevron-right"></i></span></p>
                    <h1 className="mb-0 bread">Contact Us</h1>
                </div>
                </div>
            </div>
            </section>
                
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="wrapper px-md-4">
                                    <div className="row mb-5">
                                        <div className="col-md-4">
                                            <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-map-marker"></span>
                                        </div>
                                        <div className="text">
                                        <p><span>Adresse:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                    </div>
                                </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-phone"></span>
                                        </div>
                                        <div className="text">
                                        <p><span>telephone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                    </div>
                                </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-paper-plane"></span>
                                        </div>
                                        <div className="text">
                                        <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                    </div>
                                </div>
                                    </div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col-md-7">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4">Contact</h3>
                                                <Formik
                                                initialValues={{
                                                    nom: '',
                                                    email: '',
                                                    subject: '',
                                                    telephone: '',
                                                    message: null
                                                }}

                                                onSubmit={(values, {resetForm}) => {
                                                    const formData = new FormData;
                                                    formData.append('message', this.state.message)
                                                    formData.append('nom', values.nom)
                                                    formData.append('telephone', values.telephone)
                                                    formData.append('email', values.email)
                                                    formData.append('subject', values.subject)

                                                    axios.post('contacts', formData).then(response => {
                                                        console.log(response.data)
                                                        if(response.status === 201){
                                                            resetForm();
                                                            window.location.reload();
                                                        }else{
                                                            this.setState({
                                                                invalide: response.data.invalide
                                                            })
                                                        }
                                                    })
                                                }}
                                                >
                                                    <Form className="contactForm">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" for="name"> Nom</label>
                                                                    <Field type="text" className="form-control" name="nom" placeholder="Nom et Prenom" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6"> 
                                                                <div className="form-group">
                                                                    <label className="label" for="email"> Adresse Email</label>
                                                                    <Field type="email" className="form-control" name="email" placeholder="Email" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6"> 
                                                                <div className="form-group">
                                                                    <label className="label" for="email">Telephone</label>
                                                                    <Field type="number" className="form-control" name="telephone" placeholder="Telephone" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" for="subject">Choix de categorie</label>
                                                                    <Field as="select" className="form-control" name="subject"  required>
                                                                        <option value="">Choisissez votre nom de domaine</option>
                                                                        <option value="recruteur">Recruteur</option>
                                                                        <option value="client">Chauffeur</option>
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className="label" for="#">Message</label>
                                                                    <textarea name="message" className="form-control" cols="30" rows="4" placeholder="Message" onChange={this.onChange} required></textarea>
                                                                </div>
                                                            </div>
                                                            <center><div className="error-c">{this.state.invalide} </div></center> 
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <Field type="submit" value="Send Message" className="btn btn-primary"/>
                                                                    <div className="submitting"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       
                                                    </Form>
                                                </Formik>
                                            </div>
                                        </div>
                                        <div className="col-md-5 order-md-first d-flex align-items-stretch">
                                            <div>
                                            <address className="b-info__map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5335.58373869679!2d47.53726100500432!3d-18.98322666771267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1608356920542!5m2!1sfr!2smg" width="450" height="550" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact
