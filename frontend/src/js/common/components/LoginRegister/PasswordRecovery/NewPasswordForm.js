import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, validatorFromFunction, validators, combine } from 'validate-redux-form';
import { renderField } from '../../Utils/renderField';
import './style-recovery.css';

const PasswordForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form name="loginForm" className="form-validate mb-lg" onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
                <label className="label-style" htmlFor="password">NUEVA CONTRASEÑA</label>
                <Field
                    name="password"
                    label="Contraseña"
                    component={renderField}
                    type="password"
                    className="form-control"
                />
            </div>
            <div className="form-group has-feedback">
                <label className="label-style" htmlFor="confirmPassword">CONFIRMAR CONTRASEÑA</label>
                <Field
                    name="confirmPassword"
                    label="Confirmar Contraseña"
                    component={renderField}
                    type="password"
                    className="form-control"
                />
            </div>
            <div className="buttons-box">
                <button type="submit" className="btn btn-primary m-1 align-self-center">Guardar</button>
            </div>
        </form>
    );
};

export const matchPassword = (pass, confirm) => validatorFromFunction((value) => {
    return pass === confirm;
});

export default reduxForm({
    form: 'newPassword', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            confirmPassword: combine(
                validators.exists()('Este campo es requerido'),
                matchPassword(data.password, data.confirmPassword)()('Las contraseñas no coinciden')
            ),
        });
    },
})(PasswordForm);
