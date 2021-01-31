import React, {Component} from 'react';
import Formulario from './ChangeForm';
import '../../../../../style/fuentes.css';

class CreateChange extends Component {
    componentWillMount = () => {
        const {match, leer} = this.props;
        const {id} = match.params;
            if (match.params.id) {
            leer(id);
        }
    }

    actualizarFormulario = (data) => {
        const { editar } = this.props;
        editar(data.id, data);
    }

    render() {
        const {match, crear, location} = this.props;
        const funcionEnvio = match.params.id ? this.actualizarFormulario : crear;

        return (
            <div>
                <br />
                <h4 className="tipocambio_nuevo_title">
                    NUEVO TIPO DE CAMBIO
                </h4>
                <div className="change-div">
                <Formulario
                    onSubmit={funcionEnvio}
                    actualizar={!!match.params.id}
                    ver={location.pathname.includes('ver')}
                /></div>
            </div>
        );
    }
}

export default CreateChange;
