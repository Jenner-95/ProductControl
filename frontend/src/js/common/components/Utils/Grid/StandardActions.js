import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './acciones.css';
import Swal from 'sweetalert2';
import svgDelete from '../../../../../assets/img/delete.svg';
import svgEdit from '../../../../../assets/img/edit.svg';
import svgSee from '../../../../../assets/img/file.svg';
import './estilogrid.css'

class Acciones extends Component {
    constructor(props) {
        super(props);
    }

    eliminar = (id) => {
        return () => {
            Swal.fire({
                title: '¿Eliminar?',
                text: '¡No podrá revertir esta acción!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: '¡Sí, eliminar!',
                cancelButtonText: 'No, cancelar',
                reverseButtons: true,
            }).then((result) => {
                if (result.value) {
                    this.props.eliminar(id);
                }
            });
        };
    };

    render() {
        const { id, ver, editar, eliminar } = this.props;

        return (
            <div className="d-flex justify-content-center">
                {(eliminar !== undefined) && (
                    <img className="icon_svg" src={svgDelete} style={{cursor: "pointer"}} onClick={this.eliminar(id)}/>
                    // <a className="px-2" style={{cursor: "pointer", color: "#908F90"}} onClick={this.eliminar(id)}><i className="material-icons">delete</i></a>
                )}

                {(editar !== undefined) && (
                    <Link to={`${editar}/${id}/editar`}>
                        <img className="icon_svg" src={svgEdit}  style={{cursor: "pointer"}} />
                    </Link> 

// <Link className="" to={`${editar}/${id}/editar`}><i className="material-icons">edit</i></Link>
                )}
                {(ver !== undefined) && (
                    <Link to={`${ver}/${id}/ver`} >
                        <img className="icon_svg" src={svgSee}  style={{cursor: "pointer"}} />                    
                    </Link>
                )}
            </div>
        );
    }
}
Acciones.propTypes = {
};

export function standardActions(acciones) {
    return (cell, row) => {
        return (<Acciones id={cell} {...acciones} />);
    };
}
