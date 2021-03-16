import React, { Component } from 'react'

export class ListEmploi extends Component {
   
    render() {
        const annonce = this.props.annoncesData

        let table;

        if(annonce.client === 'true'){
            table = (
                <>
                    <div className="col-md-4 d-flex  ">
                        <div className="blog-entry justify-content-end">
                        <div className="text text-center">
                            <a href="#" className="block-20 img" style={{borderRadius: '8px'}} >
                                <img src={`https://apimanageur.herokuapp.com/${annonce && annonce.annoncephoto.url}`} />
                            </a>
                            <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                                <div>
                                    <span className="mos">{annonce.date_limite} </span>
                                </div>
                            </div>
                            <h3 className="heading mb-3"><a href="#">{annonce.poste} </a></h3>
                            <p>{annonce.description} </p>
                        </div>
                        </div>
                    </div>
                </>
            )
        }
        return (
            <>
                {table}
            </>
        )
    }
}

export default ListEmploi
