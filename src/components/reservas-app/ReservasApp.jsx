import React from 'react'
import ReservaList from '../reserva-list/ReservaList'

class ReservasApp extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { reservas: [], listarReservas: false }

    }

    componentWillMount() {
        fetch('http://localhost:8085/controller/consultar/')
        .then((response) => {
            return response.json()
        })
        .then((reservas) => {
            this.setState({ reservas: reservas})
        })
    }

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