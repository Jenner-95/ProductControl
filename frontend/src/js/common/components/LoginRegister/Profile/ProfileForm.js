import React, {useEffect} from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, validatorFromFunction, validators, combine } from 'validate-redux-form';
import {renderField, renderFilePicker, SelectField, renderNumber} from '../../Utils/renderField/renderField';
import '../../../../../style/fuentes.css';


const genders = [
    {label: "Masculino", value: 0},
    {label: "Femenino", value: 1},
];

const ProfileForm = (props) => {
    const { handleSubmit, me, setAvatar } = props;
    return (
        <form action="" onSubmit={handleSubmit} className="py-4">
            <h4 className="perfil_create">PERFIL</h4>
            <div className="mb-4 card card-small uk-card-job py-5">
                <div className="border-bottom card-header ">
                    <h6 className="m-0">
                        {me.first_name}
                        {' '}
                        {me.last_name}
                    </h6>
                </div>
                <div className="p-0 pt-3 d-flex uk-flex-center flex-column flex-md-row ">
                    <div className="uk-width-1-3@m">
                        <div className="form-group has-feedback flex-1 mx-3">
                            <div className="form-group has-feedback">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label className="mx-3" htmlFor="first_name" className="perfil_nombre">Nombre y apellido</label>
                                {/* eslint-disable-next-line max-len */}
                                <Field name="first_name" placeholder="Nombre" component={renderField} type="text" className="form-control" />
                            </div>
                            <div className="form-group has-feedback">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label htmlFor="profile.address" className="perfil_email">Correo electronico</label>
                                {/* eslint-disable-next-line max-len */}
                                <Field name="profile.address" placeholder="Dirección" component={renderField} type="text" className="form-control" />
                            </div>
                            <div className="form-group has-feedback">
                                <label htmlFor="profile.gender" className="perfil_genero">Género</label>
                                {/* eslint-disable-next-line max-len */}
                                <Field name="profile.gender" placeholder="Género" component={SelectField} options={genders} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <div className="form-group has-feedback flex-1 mx-3">
                            <div className="form-group has-feedback">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label htmlFor="username" className="perfil_usuario">Usuario</label>
                                {/* eslint-disable-next-line max-len */}
                                <Field name="username" placeholder="Username" component={renderField} type="text" className="form-control" />
                            </div>
                            <div className="form-group has-feedback">
                                <label htmlFor="profile.phone" className="perfil_telefono">Teléfono</label>
                                <Field
                                    numberFormat="+(502) ####-####"
                                    name="profile.phone"
                                    placeholder="Teléfono"
                                    component={renderNumber}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group has-feedback flex-1">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label htmlFor="avatar" className="perfil_avatar">Avatar</label>
                                {/* eslint-disable-next-line max-len */}
                                <Field className="mx-3" photo={me.profile && me.profile.avatar ? me.profile.avatar : null} setFile={setAvatar} name="avatar" component={renderFilePicker} />
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
                <br></br>
                <div className="uk-width-1-3@m uk-margin-auto uk-flex uk-flex-between">

                    <a
                        className="uk-button uk-button-secondary uk-border-rounded uk-button-small uk-flex"
                        href="/#"
                    >
                        Cancelar
                        {/* <i style={{marginLeft: "2px"}} className="material-icons">cancel</i> */}
                    </a>
                    
                    <button
                        type="submit"
                        className="uk-button uk-button-primary uk-border-rounded uk-button-small uk-margin-small-right uk-flex"
                    >
                        Guardar
                        {/* <i style={{marginLeft: "2px"}} className="material-icons">save</i> */}
                    </button>
                
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'profile', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            username: validators.exists()("Este campo es requerido"),
        });
    },
})(ProfileForm);
