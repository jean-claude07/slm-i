import axios from 'axios';
import React, { Component } from 'react';

class Chauffeur extends Component {
    state={
        chauffeurs: []
    }

    componentDidMount() {
        this.getChauffeurs();
    }

    getChauffeurs = () => {
    axios.get('chauffeurs')
        .then(response => this.setState({
            chauffeurs: response.data
        }))
    }
    render() {
        const chauffeurs = this.state.chauffeurs
        console.log(this.state.chauffeurs)
        return (
            <div>
                 <section className="ftco-section">
                	<div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center  ">
                            <span className="subheading">Les demandes</span>
                            <h2>Profile des candidats posté sur notre site. </h2>
                        </div>
                        </div>
                	
                        <div className="container">
                            <div className="row d-flex">
                                {chauffeurs && chauffeurs.map(chauffeur => {
                                    let dispo;
                                    if(chauffeur.disponible === "oui"){
                                        dispo = (
                                            <>
                                                 <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                                    <div className="person text-center">
                                                    <img src={`https://apimanageur.herokuapp.com/${chauffeur && chauffeur.photo.url}`} alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                                    <h3>{chauffeur.nom} {chauffeur.prenom} </h3>
                                                    <text className="position text-muted">Titulaire d'un permis : 
                                                        <b>{chauffeur.categorie_permis} </b>
                                                    </text><br/>
                                                    <text className="position text-muted">Niveau d'experience : 
                                                        <b>{chauffeur.alcolique} </b>
                                                    </text>
                                                    <p className="mb-4"><text className="position text-muted">Description : </text>
                                                    Description ecrit par l'admnistrateur
                                                    </p>
                                                
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    return (
                                        <>
                                           {dispo}
                                        </>
                                    )
                                })}
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                    <div className="person text-center">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                    <h3>Jean Claude</h3>
                                    <text className="position text-muted">Titulaire d'un permis : 
                                        <b> A, B, D</b>
                                    </text><br/>
                                    <text className="position text-muted">Niveau d'experience : 
                                        <b> Intermediaire</b>
                                    </text>
                                    <p className="mb-4"><text className="position text-muted">Description : </text>
                                    Description ecrit par l'admnistrateur
                                    </p>
                                
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                    <div className="person text-center">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                    <h3>Jean Claude</h3>
                                    <text className="position text-muted">Titulaire d'un permis : 
                                        <b> A, B, D</b>
                                    </text><br/>
                                    <text className="position text-muted">Niveau d'experience : 
                                        <b> Intermediaire</b>
                                    </text>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                    <div className="person text-center">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                    <h3>Jean Claude</h3>
                                    <text className="position text-muted">Titulaire d'un permis : 
                                        <b> A, B, D</b>
                                    </text><br/>
                                    <text className="position text-muted">Niveau d'experience : 
                                        <b> Intermediaire</b>
                                    </text>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                
                                    </div>
                                </div>

                                
                                </div>
                                <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>	
            </div>
        );
    }
}

export default Chauffeur;
