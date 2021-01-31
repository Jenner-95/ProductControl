import React, {Component} from 'react';
import Formulario from './UsersForm';
import '../../../../style/fuentes.css'


class CreateUser extends Component{

    componentWillMount = () => {
        const {match, editar, getPermissions} = this.props;
        if(match.params.id){
            const id = match.params.id;
            editar(id);
        }   
        getPermissions()     
    }
    
    
    render(){
        const {match, registrar,location, listpermission, handleChange, actualizar, permisos_rol, asignar_permiso } = this.props;
        const funcionEnvio = match.params.id ? actualizar : registrar;
        console.log('Estos son los props', this.props)

        return(
            <React.Fragment>
                <br/>
                 <h4 className="fuente">
                    NUEVO USUARIO
                </h4>       
                <br></br><br></br>         
                <Formulario
                    onSubmit={funcionEnvio}
                    actualizar={match.params.id ? true : false}
                    listpermission = { listpermission }
                    handleChange={handleChange}
                    permisos_rol={permisos_rol}
                    asignar_permiso={asignar_permiso}
                    // getPermissions={ getPermissions }
                    ver={location.pathname.includes('ver')}
                />
            </React.Fragment>            
        )
    }
}

export default CreateUser;