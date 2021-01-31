import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Field, reduxForm, formValueSelector } from 'redux-form';
import {
    renderField,
    AsyncSelectField,
    renderDatePicker,
    renderTextArea,
    renderSwitch
} from '../Utils/renderField/renderField';
import { validate, validators } from 'validate-redux-form';
import currency from 'currency-formatter'
import {api} from '../../../utility/api';

const getCustomEmbudo = (search) => {
    
    let stages = [];
    return api
    .get(`sales-funnel/2`)
    .then((response) => {
            stages = response.stages_sales.map(stage => ({ 
                value: stage.id, 
                label: stage.name, 
                percentage: stage.percentage 
            }));
        // stages = [
        //     {value: 1, label: "Hola"},
        //     {value: 2, label: "Mundo"}
        // ]
            console.log('stages', stages)
            return stages;
        }).catch((err) => {
            return stages;
        });
};

class LeadForm extends Component {

    componentDidUpdate = () => {

        const { business_stage } = this.props

        if (!!business_stage) {
            this.props.change("possibility_of_closure", business_stage.percentage)
        }
    }

    render() {
        const { handleSubmit, closeModal, getChangeCoin, getUsuarios,
            getCompanies, getContacts, getChannel, changeTypeCoin,
            quetzals, convertCoin, getEmbudo, ver, idLead, stateModal } = this.props
            console.log('getEmbudo in LeadForm', getEmbudo)
            const datos = getCustomEmbudo('')
            console.log('datos', datos)
        
        const {taskAdd} = this.props
        

        return (
            <div>
               
                        <form onSubmit={handleSubmit} className="uk-card uk-card-default uk-padding uk-margin-auto uk-flex-1 uk-flex-center">

                            <div className="uk-flex uk-flex-between">
                                <h4>Nuevo Lead</h4>
                                <a className="uk-margin-right close" onClick={closeModal}>X</a>
                            </div>

                            <div className="uk-child-width-1-2@s uk-grid uk-margin-top">

                                <div>
                                    <label>Nombre Completo</label>
                                    <Field
                                        name="name"
                                        className="uk-input uk-border-rounded"
                                        type="text"
                                        component={renderField}
                                        autoComplete={false}
                                        disabled={ver}
                                    />
                                </div>

                                <div>
                                    <label>Etapa de negocio</label>
                                    <Field
                                        name="business_stage"
                                        key={stateModal}
                                        /* className='uk-input' */
                                        component={AsyncSelectField}
                                        loadOptions={getEmbudo}
                                        disabled={ver}
                                    />
                                </div>
                            </div>

                            <div className="uk-child-width-1-2@s uk-grid">

                                <div>
                                    <label>Tipo de moneda</label>
                                    <Field
                                        name="coin_lead"
                                        /* className='uk-input' */
                                        type="text"
                                        component={AsyncSelectField}
                                        loadOptions={getChangeCoin}
                                        onChange={changeTypeCoin}
                                        disabled={ver}
                                    />

                                </div>

                                <div>
                                    <label>Monto</label>
                                    <Field
                                        name="amount"
                                        className="uk-input uk-border-rounded uk-form-width-large"
                                        type="number"
                                        component={renderField}
                                        onChange={convertCoin}
                                        autoComplete={false}
                                        disabled={ver}
                                    />
                                    <label>Monto en Quetzales: <span>{ currency.format( quetzals, { code: 'GTQ'})}</span></label>
                                </div>
                            </div>

                            <div className="uk-child-width-1-2@s uk-grid">

                                <div>
                                    <label>Posibilidad de cierre(%)</label>
                                    <Field
                                        name="possibility_of_closure"
                                        /* className='uk-input' */
                                        type="number"

                                        disabled={true}
                                        component={renderField}
                                    // validate={ validateD }
                                    />

                                </div>

                                <div>
                                    <label>Fecha estimado de cierre</label>
                                    <Field
                                        name="closing_date"
                                        type="text"
                                        component={renderDatePicker}
                                        disabled={ver}
                                    />
                                </div>
                            </div>

                            <div className="uk-child-width-1-2@s uk-grid">

                                <div>
                                    <label>Propietario</label>
                                    <Field
                                        name="owner_lead"
                                        /* className='uk-input' */
                                        type="text"
                                        component={AsyncSelectField}
                                        loadOptions={getUsuarios}
                                        disabled={ver}
                                    />

                                </div>

                                <div>
                                    <label>Contacto</label>
                                    <Field
                                        name="contact"
                                        type="text"
                                        component={AsyncSelectField}
                                        loadOptions={getContacts}
                                        disabled={ver}
                                    />
                                </div>
                            </div>

                            <div className="uk-child-width-1-2@s uk-grid">

                                <div>
                                    <label>Empresa</label>
                                    <Field
                                        name="company"
                                        /* className='uk-input' */
                                        type="text"
                                        component={AsyncSelectField}
                                        loadOptions={getCompanies}
                                        disabled={ver}
                                    />

                                </div>

                                <div>
                                    <label>Canal de venta</label>
                                    <Field
                                        name="sales_channel"
                                        type="text"
                                        component={AsyncSelectField}
                                        loadOptions={getChannel}
                                        disabled={ver}
                                    />
                                </div>
                            </div>

                            <div className="uk-child-width-1-2@s uk-grid">
            
                                <div className="uk-margin-small-top">
                                    <label>Descripción</label>
                                    <Field
                                        name="description"
                                        type="text"
                                        component={renderTextArea}
                                        disabled={ver}
                                    />
                                </div>

                                <div>
                                    <label>Alta Posibilidad de Cierre</label>
                                    <Field
                                        name="possibility_won"
                                        type="text"
                                        component={renderSwitch}
                                        disabled={ver}
                                    />
                                </div>
                                
                            </div>

                            {
                                !ver &&
                                <div className="uk-flex uk-flex-right">
                                    <button
                                        className="uk-button uk-button-primary uk-button-small
                                                    uk-border-rounded uk-flex"
                                        type="submit"
                                    >
                                        {/* <i style={{ marginRight: "4px" }} className="material-icons">save</i> */}
                                        {idLead ? 'Actualizar' : 'Registrar'}
                                    </button>
                                </div>
                            }

                        </form>

                   
            </div>
        )
    }
}


LeadForm = reduxForm({
    form: 'leadForm', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            name: validators.exists()('Este campo es requerido'),
            business_stage: validators.exists()('Este campo es requerido'),
            amount: validators.exists()('Este campo es requerido'),
            coin_lead: validators.exists()('Este campo es requerido'),
            closing_date: validators.exists()('Este campo es requerido'),
            owner_lead: validators.exists()('Este campo es requerido'),
            contact: validators.exists()('Este campo es requerido'),
            company: validators.exists()('Este campo es requerido'),
            sales_channel: validators.exists()('Este campo es requerido'),
        });
    },
})(LeadForm);

const selector = formValueSelector("leadForm")
LeadForm = connect((state) => {
    const business_stage = selector(state, "business_stage")
    return {
        business_stage
    }
})(LeadForm)

export default LeadForm
