import {handleActions} from 'redux-actions';
import {createReducer} from "../baseReducer/baseReducer";
import { api } from "api";
import { initialize as initializeForm } from 'redux-form';

const SET_ETAPAS = 'SET_ETAPAS'


const baseReducer = createReducer(
    "stageSale", //Identificador dentro del store.
    "stage-sale", //Endpoint donde realizará las peticiones.
    "stageSaleForm", //Nombre del formulario.
    "/stage-sale", //Url del componente en el frontend.
);

/* export const { reducers, initialState, actions } = createReducer(
    "stageSale", //Identificador dentro del store.
    "stage-sale", //Endpoint donde realizará las peticiones.
    "stageSaleForm", //Nombre del formulario.
    "/stage-sale", //Url del componente en el frontend.
); */

/* export const setEtapas = etapas => ({
    type: SET_ETAPAS,
    etapas,
}); */


export const reducers = {
    ...baseReducer.reducers,
   /*  [SET_ETAPAS]: (state, { etapas }) => {
        return {
            ...state,
            etapas,
        };
    },     */
};

export const actions = {
    ...baseReducer.actions,    
}

export const initialState = {    
  /*   etapas: [], */
    ...baseReducer.initialState,
}

export default handleActions(reducers, initialState);