import React, { Component } from 'react';
import EmailForm from './formulario';
import '../LoginRegister/Login/login.css';
import imgCRM from '../../.././../assets/img/CRM.png';
import warning from '../../.././../assets/img/exclamation.svg';
import './style.css';
class reset_password extends Component {
    render() {
        return (
            <div className="image-background">
                <div className="d-flex flex-column align-items-center pt-3 bienvenida">
                    <h1 className="text-center"></h1>
                    {/* <img className="style-image-password" src={imgCRM}></img> */}
                </div>
                <br />
                <div className="login-wrapper">
                    <div className="card card-login col-lg-3 col-md-4 col-11">
                        <div className="warning">
                            <img className="style-icon-warning" src={warning}></img>
                            <h1>OLVIDASTE TU CONTRASEÑA?</h1>
                        </div>
                        <EmailForm onSubmit={() => this.props.sendEmail()} />

                    </div>
                </div>

            </div>
        );
    }
}
export default reset_password;
