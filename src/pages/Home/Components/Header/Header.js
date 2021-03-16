import React, { Component } from 'react';

import './Header.css';
class Header extends Component {
    render() {
        return (
            <div>
                   <section className="hero-wrap" data-stellar-background-ratio="0.5" id="img-header">
                        <div className="overla">
                        <div className="container">
                            <div className="row no-gutters slider-texte align-items-center">
                                <div className="col-md-12 d-flex align-items-end">
                                    <div className="text w-100">
                                        <h1 className="mb-4">Recherche emplois et recrutment des chauffeurs</h1>
                                        <p className="mb-4" id="align-texte">À MADAGASCAR.</p>
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

export default Header;
