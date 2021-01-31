import React from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import {
    renderField,
    AsyncSelectField,
    SelectField,
    renderFilePicker,
} from "../Utils/renderField/renderField";

const ShoppingForm = (props) => {
    const {
        handleSubmit,
        ver,
        actualizar,
        getProduct,
    } = props;


    return (
        
        <form onSubmit={handleSubmit} className="uk-card uk-padding uk-margin-auto uk-flex-1 uk-flex-center" encType="multipart/form-data">
            <div className="uk-grid uk-flex-center uk-child-width-expand">

                <div className="uk-width-1-3@s">

                    
                        <label className="fuente_campo_nombre">Producto</label>
                        <Field
                            name="prod"
                            component={AsyncSelectField}
                            disabled={ver}
                            className="budget-form-select"
                            loadOptions={getProduct}
                            type="text"
                        />
                   
                        <label className="fuente_campo_nombre">Cantidad</label>
                        <Field
                            name="cant"
                            className="uk-input uk-border-rounded"
                            type="number"
                            component={renderField}
                            disabled={ver}
                        />
                   
                </div>

            </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="uk-width-1-3@m uk-margin-auto uk-flex uk-flex-between">
                        <a
                            className="uk-button btn-secondary uk-border-rounded  uk-flex"
                            href="/#/shopping"
                        >
                            { ver ? 'Regresar' : 'Cancelar' } 
                        </a>
                        <div></div>
                    
                   
                    {
                     !ver
                        && ( 
                            <button
                                className="uk-button btn-dark uk-border-rounded  uk-flex" 
                                type="submit"
                            >
                                { actualizar ? 'Actualizar' : 'Guardar' }
                            </button>
                         )
                    } 
                    
                </div>
        </form>
      
    );
};

export default reduxForm({
    form: "shoppingForm", // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            cant: validators.exists()('Este campo es requerido'),
        });
    },
})(ShoppingForm);
