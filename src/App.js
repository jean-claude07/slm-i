
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Index from './pages/Home/Index';
import Contact from './pages/Contact/Contact';
import Recruteur from './pages/Employeur/Employeur';
import Candidat  from './pages/Chauffeur/Chauffeur';
import AddChauffeur from './pages/Chauffeur/Postuler/AddChauffeur';
import ProfilChauffeur from './pages/Chauffeur/Profil/ProfilChauffeur';
import ProfilRecruteur from './pages/Employeur/Profil/ProfilRecruteur'
import Login_chaffeur from './pages/Chauffeur/Login_chaffeur';
import Employeur from './pages/Employeur/Employeur';
import Annonce from './pages/Employeur/PublierOffre/Annonce';
import Condition from './pages/Condition/Condition';

class App extends Component {
  render() {
    return (
      <div>
           <BrowserRouter>
           
              <Topbar />
              <Navbar />
                <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/recruteur' component={Employeur} />
                <Route exact path='/candidat' component={Login_chaffeur} />
                <Route exact path='/postuler/:id' component={AddChauffeur} />
                <Route exact path='/chauffeur' component={ProfilChauffeur} />
                <Route exact path='/employeur' component={ProfilRecruteur} />
                <Route exact path='/annonce/:id' component={Annonce} />
                <Route exact path='/condition_general' component={Condition} />
                
                </Switch>
              <Footer />
            </BrowserRouter>
      </div>
    );
  }

}

export default App;
