import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate, validators } from 'validate-redux-form'
import { renderField} from '../../Utils/renderField/renderField'
import './globalstyle.css'

const CreateForm=(props)=>{
    const {handleSubmit, ver, isNested, closeModal,actualizar}=props
    return(
        <form on onSubmit={handleSubmit} className="uk-card uk-card-default uk-padding uk-margin-auto uk-flex-1 uk-flex-center global-form">
            <div className="uk-margin-bottom">
                <div className="uk-child-width-1-2@s uk-grid">
                    <div>
                        <label>Semana por mes</label>
                        <Field
                            name="week_for_month"
                            className="uk-input uk-border-rounded"
                            type="number"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>

                    <div>
                        <label>Horas por semana</label>
                        <Field
                            name="hour_for_week"
                            className="uk-input uk-border-rounded"
                            type="number"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Nombre del COO</label>
                        <Field
                            name="name_coo"
                            className="uk-input uk-border-rounded"
                            type="text"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Correo electronico COO</label>
                        <Field
                            name="email_coo"
                            className="uk-input uk-border-rounded"
                            type="email"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Nombre del jefe de diseño </label>
                        <Field
                            name="name_boss_design"
                            className="uk-input uk-border-rounded"
                            type="text"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Correo electronico jefe de diseño</label>
                        <Field
                            name="email_boss_design"
                            className="uk-input uk-border-rounded"
                            type="email"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Nombre del jefe de finanzas </label>
                        <Field
                            name="name_boss_finance"
                            className="uk-input uk-border-rounded"
                            type="text"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Correo electronico jefe de finanzas</label>
                        <Field
                            name="email_boss_finance"
                            className="uk-input uk-border-rounded"
                            type="email"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Nombre del jefe de soporte </label>
                        <Field
                            name="name_boss_support"
                            className="uk-input uk-border-rounded"
                            type="text"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    <div>
                        <label>Correo electronico jefe de soporte</label>
                        <Field
                            name="email_boss_support"
                            className="uk-input uk-border-rounded"
                            type="email"
                            component={renderField}
                            disabled={ver}
                        />
                    </div>
                    

                </div>
            </div>
            <div className="uk-width-1-2@m uk-margin-auto">
                <div className="uk-flex uk-flex-center">

                    {isNested ?
                        <button
                            type="button"
                            className='uk-button uk-button-secondary uk-button-small uk-border-rounded uk-flex'
                            onClick={() => closeModal()}
                        >
                            Cancelar
                        {/* {<i style={{ marginLeft: "2px" }} className="material-icons">cancel</i>} */}
                        </button>
                        :
                        <a
                            className='uk-button uk-button-secondary uk-button-small uk-border-rounded uk-flex'
                            href='/#/'
                        >
                            Cancelar
                        {/* {<i style={{ marginLeft: "2px" }} className="material-icons">cancel</i>} */}
                        </a>
                    }

                    {

                        !ver
                        && (
                            <button
                                className="uk-button uk-button-primary uk-margin-left
                                        uk-button-small uk-border-rounded uk-flex"
                                type="submit"
                            >
                                <i style={{marginRight: "4px"}} className="material-icons">save</i>
                                { actualizar ? 'Actualizar' : 'Registrar' }

                            </button>
                        )
                    }

                </div>

            </div>

        </form>
    )
}
export default reduxForm({
    form: 'createConfigutarion', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            /*week_for_month: validators.exists()('Este campo es requerido'),*/
            hour_for_week: validators.exists()('Este campo es requerido'),
            name_coo:validators.exists()('Este campo es requerido'),
            name_boss_design:validators.exists()('Este campo es requerido'),
            name_boss_finance:validators.exists()('Este campo es requerido'),
            name_boss_support:validators.exists()('Este campo es requerido'),
        });
    },
})(CreateForm);
