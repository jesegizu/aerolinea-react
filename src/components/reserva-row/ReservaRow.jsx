import React from 'react'

export function ReservaRowFunctionalComponent(props) {
    return(
        <li className="media">
            <div className="media-body">
                <h4>Identificacion: {props.identificacion}</h4>
                <p>
                    Salida: {props.salida} <br/>
                    Destino: {props.destino} <br/>
                    Dia: {props.dia} <br/>
                </p>
            </div>
            <hr/>
        </li>
    );
};

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