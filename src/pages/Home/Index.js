import React, { Component } from 'react';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Emploi from './Components/ListeEmploi/Emploi';
import Urgence from './Components/Urgence/Urgence';
import Demande from './Components/ListeChauffeur/Chauffeur';
class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Emploi />
                <Urgence />
                <Demande/>
            </div>
        );
    }
}

export default Index;
