import React, { Component } from 'react';

import './topBar.css';
class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row justify-content-between">
                        <div className="col-md-8 order-md-last">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                <a href="/">
                                    <img className="img-responsive" src="media/logo.png" alt="logo" /> 
                                </a>
                                </div>
                                <div className="col-md-8 d-md-flex justify-content-end mb-md-0 mb-3">
                                <div className="col-md-4 col-xs-4">
										<span className="fa fa-phone"></span>
										<span className="b-topBar__addr"> +261 32 00 120 21</span> 
								</div>
								<div className="col-md-4 col-xs-4">
										<span className="fa fa-envelope"></span>
										<span className="b-topBar__addr"> slm-i@gmail.com</span> 
								</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="social-media">
                            <p className="mb-0 d-flex">
                                <a href="https://web.facebook.com/" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                <a href="https://twitter.com/login?lang=fr" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                <a href="https://www.instagram.com/?hl=fr" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                <a href="https://dribbble.com/" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                            </p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;
