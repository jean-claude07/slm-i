import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik'
import axios from 'axios'

export class MoreProfile extends Component {
    state={
        experience: null
    }

    handleChange = (e) => {
        this.setState({
            experience: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h4 className="marge">Ajouter plus d'information <a href="#"data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                <i className="fa fa-edit" id="icons-edite" aria-hidden="true"></i></a></h4>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ajouter d'autre profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        initialValues={{
                            etude: '',
                            adresse: '',
                            experience: null
                        }}

                        onSubmit={(values, {resetForm}) => {
                            const formData = new FormData();
                            formData.append('adresse', values.adresse)
                            formData.append('etude', values.etude)
                            formData.append('experience', this.state.experience)
                            formData.append('candidatprofile_id', this.props.id)

                            axios.post('plusinfos', formData).then(resp => {
                                if(resp.status === 201){
                                    resetForm(); 
                                    window.location.reload();
                                }
                            })
                        }}
                    >
                        <Form>
                            <div className="modal-body">
                       
                            <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label"><i className="fa fa-home"></i> :</label>
                                    <Field type="text" className="form-control" name="adresse" id="recipient-name"/>
                                </div>

                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Niveau d'étude</label>
                                    <Field type="text" className="form-control"name="etude" id="recipient-name"/>
                                </div>
                                
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Experience proffessionnel(text)</label>
                                    <textarea className="form-control"  name="experience" id="message-text" onChange={this.handleChange}></textarea>
                                </div>
                            
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Valider</button>
                            </div>
                        </Form>
                    </Formik> 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default MoreProfile
