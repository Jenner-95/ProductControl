import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import LoginForm from './LoginForm';
import './login.css';
import imgCRM from '../../../../../../src/assets/img/hj.png';
import LoadMask from "Utils/LoadMask/LoadMask";

class Login extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    componentDidMount(props) {
        this.state = {prueba: true};
    }

    render() {
        const {onSubmit, loader} = this.props;

        if (localStorage.getItem('token')) {
            return (<Redirect to="/"/>);
        }
        return (
            <div className="image-background">
                <div className="d-flex flex-column align-items-center pt-3 bienvenida">
                    <h2 className="bienvenida uk-margin-large-top"></h2>
                    <h5 className="text-warning">ONLINEDEV.GT</h5>
                    <img src={imgCRM} className="img-CRM"></img>
                </div>
                <div className="login-wrapper">
                    <div className="card card-login col-lg-3 col-md-4 col-11">

                        <LoadMask loading={loader} light>
                            <LoginForm onSubmit={onSubmit}/>
                        </LoadMask>

                        <Link 
                            className="link-hover uk-margin-small-top" 
                            to="/registro"
                        >
                            ¿No tienes cuenta? Pulsa aqui
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;
