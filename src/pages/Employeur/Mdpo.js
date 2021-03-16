import React, { Component } from 'react'
import axios from 'axios';

export class Mdpo extends Component {
    state={
        errors: '',
        email: ''
    }

    handleChange = e => {
       
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post('mdp', this.state).then(response => {
            if(response.status == 200){
                console.log(response)
                
                this.setState({
                    errors: response.data.errors
                })
            }else{
                console.log(response)
            }
        })
    }
    render() {
        console.log(this.state.email)
        return (
            <div>
                <a href="#" data-toggle="modal" data-target="#forgotpassword">Mot de passe oublié !</a>
														
                <div className="modal fade" id="forgotpassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Veuiller saisir votre addresse Email ci dessous</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            		
                            
                            <form className="d-flex bd-highlight" onSubmit={this.handleSubmit} >
                                <input type="email" className="form-control" onChange={this.handleChange} placeholder="Votre addresse email" required/>
                                <input type="submit" value="Valider" className="btn btn-primary" />
                            </form>
                    
                        </div>
                        <div className="message">{this.state.errors}</div>
                        <div className="modal-footer">
                            <span>Aprés l'action Valider vous allez recevoire votre mot de passe dans votre boite E-mail.</span>	
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Mdpo
