import React, { Component } from 'react'
import CreateForm from './ConfigurationForm';
import '../../../../../style/fuentes.css'
import './globalstyle.css'
export default class Configuration extends Component {

    componentWillMount = () => {

        const {detalle } = this.props;
        detalle()
       
    }

    render() {


        const { actualizar} = this.props
        {/*const fn = match.params.id ? actualizar : onSubmit
        const isActualizar = (match.params.id) ? true : false*/}


        return (
            <div>
                <br />
                <h2 className="fuente">
                   Configuracion General
                </h2>
                <div className="global-div ">
                <CreateForm
                    onSubmit={actualizar}
                    
                />
                </div>
            </div>
        )
    }
}