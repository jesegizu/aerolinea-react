import React, { useState, useEffect } from 'react'
import ReservaList, { ReservaListFunctionalComponent } from '../reserva-list/ReservaList';


export function ReservasAppFunctionalComponent(props) {

    const [reservas, setReservas] = useState([]);
    const [activarListaDeReservas, setActivarListaDeReservas] = useState(false);

    useEffect(() => {

        fetch('http://localhost:8085/controller/consultar/')
        .then((response) => {
            return response.json();
        })
        .then((reservasResponse) => {
            setReservas(reservasResponse);
        })

    }, []);

    const listarReservas = (activarListaDeReservas) => (
        setActivarListaDeReservas(!activarListaDeReservas)
    );

    if (reservas.length > 0) {
        return (
            <div className="container-fluid">
                <button onClick={listarReservas(activarListaDeReservas)}>Consultar por Cedula</button>


                { activarListaDeReservas ? <ReservaList listado = {reservas}/> : <div></div> }
                
            </div>
        );
    } else {
        return <p className="text-center">Cargando reservas...</p>
    }
    
};

class ReservasApp extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { 
            reservas: [], 
            listarReservas: false 
        };

    };

    componentWillMount() {
        fetch('http://localhost:8085/controller/consultar/')
        .then((response) => {
            return response.json()
        })
        .then((reservas) => {
            this.setState({ reservas: reservas})
        });
    };

    listarReservas = (listarReservas) => {
        this.setState(() => ({ listarReservas: !listarReservas }));
    }

    render() {
        if (this.state.reservas.length > 0) {
            return (
                <div className="container-fluid">
                    <button onClick={() => this.listarReservas(this.state.listarReservas)}>Consultar por Cedula</button>


                    { this.state.listarReservas ? <ReservaList listado = {this.state.reservas}/> : <div></div> }
                    
                </div>
            )
        } else {
            return <p className="text-center">Cargando reservas...</p>
        }
    }

}

export default ReservasApp;