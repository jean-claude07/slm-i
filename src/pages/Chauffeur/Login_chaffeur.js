import React, { Component } from 'react'
import EspaceChauffeur from './EspaceClient/EspaceChauffeur'
import ProfilChauffeur from './Profil/ProfilChauffeur'
import axios from 'axios';

export class Login_chaffeur extends Component {
    state={
        candidat: {},
        token: '',
        plus: {}
    }

    componentDidMount = () => {
        axios.get(`candidatprofiles/${sessionStorage.id}`).then(
          resp => {
              console.log(resp.data)
            this.setState({
              candidat: resp.data.candidat
            })
            this.setState({
                token: resp.data.token
            })
            this.setState({
                plus: resp.data.plus
            })
          }
        )
      }
      
    render() {
       console.log(sessionStorage)
        let candidat;
        if(sessionStorage.id){
            candidat = (
                <>
                    <ProfilChauffeur prophile={this.state}/>
                </>
            )
        }else{
            candidat = (
                <>
                    <EspaceChauffeur/>
                </>
            )
        }
        return (
            <div>
                {candidat}
            </div>
        )
    }
}

export default Login_chaffeur;
