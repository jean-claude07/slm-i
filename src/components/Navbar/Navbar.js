import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    handleClick = () => {
        sessionStorage.clear()
        localStorage.clear(window.location.reload())
    }

    handleCheck = () => {
        alert('veuiller vous deconnecter ;-)');
    }
    render() {
        let button;
        let recruteur;
        let candidat;

        if(sessionStorage.id){

            button = (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.handleClick}>Deconnexion</Link>
                    </li>
                </>
            )
        }

        if(sessionStorage.id){

            recruteur = (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.handleCheck}>recruteur</Link>
                    </li>
                </>
            )
        }else{
            recruteur = (
                <>
                    <li className="nav-item">
                        <Link to="/recruteur" className="nav-link">recruteur</Link>
                    </li>
                </>
            )
        }

        if(localStorage.id){
            button = (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.handleClick}>Deconnexion</Link>
                    </li>
                </>
            )
        }

        if(localStorage.id){
            candidat = (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.handleCheck}>Candidat</Link>
                    </li>
                </>
            )
        }else(
            candidat = (
                <>
                    <li className="nav-item">
                        <Link to="/candidat" className="nav-link">Candidat</Link>
                    </li>
                </>
            )
        )
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Accueil</Link>	
                            </li>
                            {candidat}
                            {recruteur}
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/condition_general" className="nav-link">Condition general</Link>
                            </li>
                            {button}
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
