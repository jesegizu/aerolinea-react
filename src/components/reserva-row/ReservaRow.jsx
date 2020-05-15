import React from 'react'

class ReservaRow extends React.Component {
    render() {
        return(
            <li className="media">
                <div className="media-body">
                    <h4>Identificacion: {this.props.identificacion}</h4>
                    <p>
                        Salida: {this.props.salida} <br/>
                        Destino: {this.props.destino} <br/>
                        Dia: {this.props.dia} <br/>
                    </p>
                </div>
                <hr/>
            </li>
        )
    }
}

export default ReservaRow