import React, { Component } from 'react';


import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div>
                
                <footer className="ftco-footer">
                    <div className="container">
                        <div className="row mb-5">
                        <div className="col-md-3 col-xs-6">
									<aside className="b-info__aside wow zoomInLeft" data-wow-delay="0.3s">
										<article className="b-info__aside-article">
											<h3 className="avantage">Les avantages</h3>
											<div className="b-info__aside-article-item">
												
												<ul className="text">
													<li>Prise en charge de vos annonces</li>
													<li>Publication gratuite de vos annonces</li>
													<li>Assistance 7j/7, 24h/24</li>
												</ul>
											</div>
											
										</article>
									</aside>
								</div>
                                <div className="col-md-3 col-xs-6">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p className="entete">Client</p>
										<div className="b-info__contacts-item">
				 				           <a href="/candidat" className="text">Candidat</a>
										</div>
										<div className="b-info__contacts-item">
				 				           <a href="/recruteur" className="text">Recruteur </a>
										</div>
										<div className="b-info__contacts-item">											
				 				           <a href="/contact" className="text">Contact</a>
										</div>
										<div className="b-info__contacts-item">											
				 				           <a href="/signup" className="text">Conditions générales</a>
										</div>
									</address>
								</div>
								<div className="col-md-3 col-xs-6">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p className="entete">SLM-I</p>
										<div className="b-info__contacts-item">
											
											<span className="fa fa-map-marker" id="pad-mai"></span>
											
											<em>34
											rue de la Plantation</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-phone" id="pad-ma"></span>
											<em>06 92 370 380</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-envelope" id="pad-max"></span>
				 				           <a href="/Contact" className="text">slm-i@gmail.com</a>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-envelope" id="pad-max"></span>
				 				           <a href="/Contact" className="text">Contact</a>
										</div>
									</address>
									<div className="map-responsive">
                                    <address className="b-info__map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5335.58373869679!2d47.53726100500432!3d-18.98322666771267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1608356920542!5m2!1sfr!2smg" width="500" height="200" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </address>
									</div>
									
								</div>
								<div className="col-md-3 col-xs-6">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p className="entete">Prise en charge</p>
										<div className="b-info__contacts-item text-justify">
				 				           <a href="/aeroport" className="text">Candidat</a>
										</div>
										<div className="b-info__contacts-item">
				 				           <a href="/sainte-marie" className="text">Recruteur</a>
										</div>
									</address>
									
								</div>
                        </div>
                    </div>
                    <div className="container-fluid px-0 py-5 bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
							<div className="col-xs-4">
									<div className="b-footer__company wow slideInLeft" data-wow-delay="0.3s">
										<div className="b-nav__logo">
											<h3><a href="/">SLM-<span>I</span></a></h3>
										</div>
										<p>Connecter pour mieux gérer</p>
									</div>
								</div>
								<div className="col-xs-8">
							<div className="b-footer__content wow slideInRight" data-wow-delay="0.3s">
										<div className="b-footer__content-social">
											<a href="https://www.facebook.com/"><span className="fa fa-facebook-square"></span></a>
											<a href="https://twitter.com/"><span className="fa fa-twitter-square"></span></a>
											<a href="https://www.google.com/"><span className="fa fa-google-plus-square"></span></a>
											<a href="https://www.instagram.com/accounts/login/"><span className="fa fa-instagram"></span></a>
											<a href="https://www.youtube.com/"><span className="fa fa-youtube-square"></span></a>
											<a href="https://www.skype.com/fr/"><span className="fa fa-skype"></span></a>
										</div>
										<nav className="b-footer__content-nav">
											<ul>
												<li><a href="/">Accueil</a></li>
												<li><a href="/candidat">Candidat</a></li>
												<li><a href="/recruteur">Recruteur</a></li>
												<li><a href="/condition">Nos Conditions</a></li>
												
												
												<li><a href="/contact">Contact</a></li>
											</ul>
										</nav>
									</div>
                            </div>
							</div>
                        </div>
                    </div>
                    </div>
                </footer>


            </div>
        );
    }
}

export default Footer;
