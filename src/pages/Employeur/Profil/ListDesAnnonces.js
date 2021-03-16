import React, { Component } from 'react'

export class ListDesAnnonces extends Component {
    state={

    }

  
    render() {
        const annonces = this.props.annonce
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        
                        <div>
                            <h4><i className="fa fa-clock-o" aria-hidden="true"></i> Vos annonce </h4>
                                
                        </div>
                        {annonces && annonces.map(annonce => {
                            return (

                                <List data={annonce} />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default ListDesAnnonces;

function List(props) {
    var annonce = props.data
    return (
        <>
        <div>
            <br/>
            <center>
                <img src={`https://apimanageur.herokuapp.com/${annonce && annonce.annoncephoto.url}`} width="200px" style={{borderRadius: '8px'}} />
            </center>
        </div>
        <div><br/></div>
        Date : <span className="noir">{annonce.created_at} </span>
            <div className="noir">Vous avez publié l'annonce :</div>
            <div className="noir bolder">{annonce.etablisment} </div>
            <div className="noir bolder">Poste : {annonce.poste}</div>

            <br/>
                <Detail base={annonce} />
            <hr/>
        </>
    )
}

function Detail(props) {
    const detail = props.base
    return (
        <>
            <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target={`#${detail.poste}`}>
                voire detail
                </button>

                
                <div class="modal fade" id={`${detail.poste}`} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Annonce detail</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                                date limite : {detail.date_limite}
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">Poste : {detail.poste} </button>
                            <button type="button" class="list-group-item list-group-item-action">contact: {detail.contact} </button>
                            <button type="button" class="list-group-item list-group-item-action">email: {detail.email} </button>
                            <button type="button" class="list-group-item list-group-item-action">etablisment: {detail.etablisment} </button>
                            <button type="button" class="list-group-item list-group-item-action">contrat: {detail.contrat} </button>
                            <button type="button" class="list-group-item list-group-item-action">province: {detail.province} </button>
                            <button type="button" class="list-group-item list-group-item-action">libelle: {detail.pretention} </button>
                            <button type="button" class="list-group-item list-group-item-action">description: {detail.description} </button>
                            <button type="button" class="list-group-item list-group-item-action">profil_rechercher: {detail.profil_rechercher} </button>
                            <button type="button" class="list-group-item list-group-item-action" disabled>reference : {detail.reference} </button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        {/* <button type="button" class="btn btn-primary">Understood</button> */}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}



