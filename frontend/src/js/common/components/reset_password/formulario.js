import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField} from '../Utils/renderField';
import './style.css'

const EmailForm = (props) => {
    const { handleSubmit } = props;
   
    return(
        <form onSubmit={handleSubmit} name="loginForm" className="form-validate mb-lg" >
            <div className="form-group has-feedback">
                <label className="label-style" htmlFor="email">E-MAIL</label>
                <Field component={renderField} name='email' />
            </div>
            
            <div className="buttons-box">
                <button
                    type="submit"
                    className='btn btn-dark btn-sm'
                >
                    Enviar enlace
                </button>       
                <a
                    className='btn btn-secondary btn-sm ml-2'
                    href='/#/login'
                >
                    Cancelar
                </a>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'reset_password', // a unique identifier for this form    
})(EmailForm);