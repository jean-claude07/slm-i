import React, { Component } from 'react';
import './liste.css';
import Axios from 'axios';
import ListEmploi from './ListEmploi';
class Emploi extends Component {
    state={
        annonces: []
    }

    componentDidMount = () => {
        this.getAnnonces();
    }

    getAnnonces = () => {
        Axios.get('annonce').then(resp => {
            this.setState({
                annonces: resp.data
            })
        })
    }
    render() {
        const annonces = this.state.annonces
        return (
            <div>
                <section className="ftco-section">
                	<div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center  ">
                            <span className="subheading">Les offres</span>
                            <h2>Emplois et recrutement à Madagascar </h2>
                        </div>
                        </div>
                	
                        <div className="container">
                            <div className="row d-flex">
                            {annonces && annonces.map(annonce => {
                                return (

                                    <ListEmploi annoncesData={annonce} />
                                )
                            })}
                            
                            </div>
                        </div>
                        </section>	

            </div>
        );
    }
}

export default Emploi;
