import React from 'react';
import ReservaRow from '../reserva-row/ReservaRow';

export function ReservaListFunctionalComponent(props) {
    return(
        <ul className="media-list">
            {
                props.listado.map((reserva) => {
                    return <ReservaRow identificacion={ reserva.idUsuario }
                                       salida={ reserva.salida }
                                       destino={ reserva.destino } 
                                       dia = { reserva.dia }
                                       hora = {reserva.hora }/>
                })
            }
        </ul>
    );
};

class ReservaList extends React.Component {

    render() {
        return(
            <ul className="media-list">
                {
                    this.props.listado.map((reserva) => {
                        return <ReservaRow identificacion={ reserva.idUsuario }
                                           salida={ reserva.salida }
                                           destino={ reserva.destino } 
                                           dia = { reserva.dia }
                                           hora = {reserva.hora }/>
                    })
                }
            </ul>
        )
    }
}
 export default ReservaList;