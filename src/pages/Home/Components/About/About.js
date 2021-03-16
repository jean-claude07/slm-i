import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './About.css';
class About extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 img img-3 d-flex justify-content-center align-items-center" id="image-about">
					</div>
					<div className="col-md-6 wrap-about pl-md-5 py-5">
	          <div className="heading-section">
	          	<span className="subheading">BIENVENUE À L'ENTREPRISE S.L.M-I</span>
	            <h2 className="mb-4">Entreprise S.L.M-I</h2>

	            <p>Il est important et essentiel que le chauffeur présente à son employeur une voiture constamment efficace et en toutes les circonstances.
					En fonction des clients et demandes, les attentes peuvent varier mais s' il s'agit d'un client au statut de diplomate par exemple, les compétences en terme de sécurité et rapidité seront valorisées.</p>
	            <p>Diffusion des offres d'emploi Plateforme unique pour la gestion des candidatures Consultation des profils des candidats</p>

	            <Link to="/condition_general" className="btn btn-primary">Condition génerale</Link>
	          </div>

					</div>
				</div>
			</div>
		</section>
		
            </div>
        );
    }
}

export default About;
