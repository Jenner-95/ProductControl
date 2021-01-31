import React from "react";
import { Field, reduxForm } from "redux-form";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import {
    renderCurrency,
    AsyncSelectField,
} from "../../Utils/renderField/renderField";
import type_coins from "../../../../../assets/csv/Monedas.csv";
import "../../../../../style/fuentes.css";
import "./change.css";
const validate = (values) => {
    const errors = {};
    if (!values.coin_type) {
        errors.coin_type = "Campo requerido";
    }

    if (!values.change_type) {
        errors.change_type = "Campo requerido";
    }
    return errors;
};

const ChangeForm = (props) => {
    const { handleSubmit, actualizar, ver } = props;
    const options = async (search = null) => {
        const data = [];
        await Papa.parse(type_coins, {
            download: true,
            complete: (results) => {
                if (search != null) {
                    results.data.forEach((x) => {
                        if (
                            x.Moneda.toLowerCase().includes(
                                search.toLowerCase()
                            )
                        ) {
                            data.push({ value: x.Codigo, label: x.Moneda });
                        }
                    });
                } else {
                    results.data.forEach((x) => {
                        data.push({ value: x.Codigo, label: x.Moneda });
                    });
                }
            },
            header: true,
        });
        return data;
    };
    return (
        <form onSubmit={handleSubmit} className="change-form ">
            <div className="uk-child-width-1-2@s uk-grid">
                <div className=" ">
                    <label htmlFor="coin_type" className="tipocambio_moneda">
                        Moneda
                    </label>
                    {/* eslint-disable-next-line max-len */}
                    <Field
                        name="coin_type"
                        label="Tipos de Monedas"
                        placeholder="Buscar..."
                        component={AsyncSelectField}
                        loadOptions={options}
                        disabled={ver}
                        className="change-form-input "
                    />
                </div>
                <div className=" ">
                    <label htmlFor="change_type" className="tipocambio_tcambio">
                        Tipo de cambio
                    </label>
                    <Field
                        name="change_type"
                        label="Tipo de Cambio"
                        className="uk-input tipocambio-placeholder change-form-input "
                        component={renderCurrency}
                        disabled={ver}
                        placeholder="0.00"
                    />
                </div>
            </div>
            <br />
            <br />
            {ver && (
                <div className="uk-margin-right uk-flex uk-flex-center">
                    <Link
                        className="uk-button uk-button-secondary uk-border-rounded uk-button-small "
                        to="/config/change-coin"
                    >
                        Cancelar
                        <i
                            style={{ marginLeft: "2px" }}
                            className="material-icons"
                        >
                            cancel
                        </i>
                    </Link>
                </div>
            )}

            {!ver && (
                <div className="uk-child-width-1-2@s uk-grid">
                    <div className="uk-display-block change-form-button ">
                        <Link
                            className="uk-button uk-button-secondary uk-border-rounded uk-button-small  "
                            to="/config/change-coin"
                        >
                            Cancelar
                            {/* <i
                                style={{ marginLeft: "2px" }}
                                className="material-icons"
                            >
                                cancel
                            </i> */}
                        </Link>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="uk-button uk-button-primary uk-border-rounded uk-button-small"
                        >
                            {actualizar ? "Actualizar" : "Guardar"}
                            {/* <i
                                style={{ marginLeft: "2px" }}
                                className="material-icons"
                            >
                                save
                            </i> */}
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
};

export default reduxForm({
    form: "ChangeForm",
    validate,
})(ChangeForm);
