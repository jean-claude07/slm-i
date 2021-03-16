import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ProfilChauffeur from './Profil/ProfilChauffeur';
import EspaceChauffeur from './EspaceClient/EspaceChauffeur';

class Chauffeur extends Component {
    render() {
        return (
            <> 
           
             <EspaceChauffeur />     
             {/* <Addchauffeur />  */}
            {/* <ProfilChauffeur /> */}
            </>  
        );
    }
}

export default Chauffeur;
