import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate, validators } from 'validate-redux-form'
import { renderField, renderDatePicker } from '../Utils/renderField/renderField'

const TaskForm = (props) => {

    const { taskAdd, ver, closeModal} = props

    return (
        <form onSubmit="">
            <a className="uk-margin-right close" onClick={closeModal}>X</a>
            <div className="uk-margin-bottom">
                <label>Nombre</label>
                <Field
                    name="task_name"
                    className="uk-input uk-border-rounded"
                    type="text"
                    value=""
                    component={renderField}
                    disabled={ver}
                />
            </div>

            <div className="uk-margin-bottom">
                <label>Descripción</label>
                <Field
                    name="task_description"
                    className="uk-input uk-border-rounded"
                    type="text"
                    value=""
                    component={renderField}
                    disabled={ver}
                />
            </div>

            <div className="uk-margin-bottom">
                <label>Fecha Limite</label>
                <Field
                    name="limit_date"
                    component={renderDatePicker}
                    disabled={ver}
                />
            </div>

            <div className="uk-flex uk-flex-right">
                <button
                    className="uk-button uk-button-primary uk-button-small
                                uk-border-rounded uk-flex uk-margin-bottom"
                    onClick={e => taskAdd()}
                    type="button"
                >
                    {/* <i style={{ marginRight: "4px" }} className="material-icons">save</i> */}
                    Agregar
                </button>
            </div>


        </form>
    )
}


export default reduxForm({
    form: 'taskForm', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            name: validators.exists()('Este campo es requerido'),
        });
    },
})(TaskForm);