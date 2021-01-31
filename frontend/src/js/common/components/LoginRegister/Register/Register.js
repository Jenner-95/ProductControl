import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoadMask from "../../Utils/LoadMask/LoadMask";
import imgCRM from '../../../../../../src/assets/img/hj.png';

class Registro extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    componentDidMount(props) {
        this.state = { prueba: true };
    }

    render() {
        const { onSubmit, loader, listOrganization } = this.props;
        if (localStorage.getItem('token')) {
            return (<Redirect to="/" />);
        }
        return (
            <div className="image-background">
                <div className="d-flex flex-column align-items-center pt-3 bienvenida">
                <h5 className="text-warning">ONLINEDEV.GT</h5>
                    <img src={imgCRM} className="img-CRM"></img>
                </div>
                <br />
                <div className="login-wrapper">
                    <div className="card card-login col-lg-3 col-md-4 col-11">
                        <LoadMask loading={loader} light>
                            <RegisterForm onSubmit={onSubmit}  listOrganization={listOrganization}/>
                            <span>¿Ya tienes cuenta?&nbsp;<Link to="/login">Ingresa aquí</Link></span>
                        </LoadMask>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registro;
