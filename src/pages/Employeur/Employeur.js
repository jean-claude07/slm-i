import React, { Component } from 'react';
import axios from 'axios';
import EspaceRecruteur from './EspaceClient/EspaceRecruteur';
import ProfilRecruteur from '../Employeur/Profil/ProfilRecruteur';
class Employeur extends Component {
  state={
      recruteur: {},
      token: '',
      annonce: []
  }

  componentDidMount = () => {
      if(sessionStorage.token){
        axios.get(`recruteurs/${localStorage.id}`).then(
          resp => {
              console.log(resp.data)
            this.setState({
              recruteur: resp.data.recruteur
            })
            this.setState({
                token: resp.data.token
            })
            this.setState({
              annonce: resp.data.annonce
            })
          }
        )
      }
    }
    render() {
      let recruteur;

      if(localStorage.id){
        recruteur = (
          <>
            <ProfilRecruteur recruteur={this.state}/>
          </>
        )
      }else{
        recruteur = (
          <EspaceRecruteur />
        )
      }
        return (

          <>
			      {recruteur}
          </>  
        );
    }
}

export default Employeur;
