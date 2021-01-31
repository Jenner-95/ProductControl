import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { validate, validators} from 'validate-redux-form';
import {renderField, AsyncSelectField } from "../Utils/renderField";
import {renderFieldCheck, renderSwitch} from '../Utils/renderField/renderField';
import { api } from '../../../utility/api';

const getRoles = (search) => {
    const roles = [];
    return api.get('role', {search}).then((response) => {
        if (response) {
            response.results.forEach((rol) => {
                roles.push({value: rol.id, label: rol.name});
            });
        }
        return roles;
    }).catch(() => {
        return [];
    });
};

const renderPermissions = ({fields}) => (
    <div>
        {
            fields.map((field, index) => {
                <div key={index}>
                    <Field
                        name={`${field}.name`}
                        component={renderField}
                    />
                    <Field
                        name={`${field}.id`}
                        component={renderField}

                    />
                </div>;
            })
        }
    </div>
);


const Form = (props) => {
    const { handleSubmit, asignar_permiso, actualizar, permisos_rol, value, ver, listpermission, handleChange } = props;

    return (
        <form onSubmit={handleSubmit} className="uk-card uk-padding uk-margin-auto uk-flex-1 uk-flex-center">
            <div className="uk-grid uk-flex-center uk-child-width-expand">
                <div className="uk-width-1-3@s">

                    <label className="fuente_campo_nombre">Nombre y apellido</label>
                    <Field className="uk-input uk-border-rounded" component={renderField} name="first_name" disabled={ver} />
                    <br />
                    <label className="fuente_campo_email">Correo electronico</label>
                    <Field className="uk-input uk-border-rounded" component={renderField} name="email" disabled={ver} />
                    <br />
                    <label className="fuente_campo_permiso">Permisos</label>
                    {
                        listpermission
                            ? listpermission.map(permission => (

                                <Field

                                    key={permission.id}
                                    component={renderSwitch}
                                    name={permission.name}
                                    label={permission.name}
                                    value
                                    disabled={permisos_rol}
                                    onChange={asignar_permiso(permission.id)}
                                />

                            ))
                            : console.log('No tiene data')
                    }
                </div>
                <div className="uk-width-1-3@s">
                <label className="fuente_campo_usuario">Usuario</label>
                    <Field className="uk-input uk-border-rounded" component={renderField} name="username" disabled={ver} />
                    <br />
                <label className="fuente_campo_rol">Tipo de rol</label>
                    <Field
                        component={AsyncSelectField}
                        name="role"
                        placeholder="Asignar rol"
                        disabled={ver}
                        loadOptions={getRoles}
                        onChange={handleChange}
                        value={value}
                    />
                    <br />

                </div>
            </div>
            <br />
            <br />
            {/*  <div>
                <FieldArray
                    name="permissions"
                    component={renderPermissions}

                />
            </div> */}
            <br />
            <br />
            <div className="uk-width-1-3@m uk-margin-auto uk-flex uk-flex-between">

                <a
                    className="uk-button btn-secondary uk-border-rounded  uk-flex"
                    href="/#/users"
                >
                    Cancelar
                    {/* <i style={{marginLeft: "2px"}} className="material-icons">cancel</i> */}
                </a>
                {!ver
            && (
                <button
                    type="submit"
                    className="uk-button btn-dark uk-border-rounded  uk-flex"
                >
                    {actualizar ? 'Actualizar' : 'Guardar'}
                    {/* <i style={{marginLeft: "2px"}} className="material-icons">save</i> */}
                </button>
            )
                }
            </div>
        </form>
    );
};
export default reduxForm({
    form: 'UsersForm', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            username: validators.exists()('Este campo es requerido'),
            first_name: validators.exists()('Este campo es requerido'),
            last_name: validators.exists()('Este campo es requerido'),

            role: validators.exists()('Este campo es requerido'),
        });
    },
})(Form);
