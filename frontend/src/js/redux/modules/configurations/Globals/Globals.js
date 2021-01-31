
import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";
import _ from 'lodash'


const SUBMIT = 'CONFIGURATION_SUBMIT';
const LOADER = 'CONTACT_LOADER';
const SET_DATA = 'SET_DATA';
const PAGE = 'SET_PAGE';
const OPEN_MODAL = 'OPEN_MODAL';




const detalle = () => (dispatch) => {

    /*dispatch(setLoader(true));*/

    api.get(`configurations/get_configuration`).then((response) => {
        
        dispatch(initializeForm('createConfigutarion', response));

    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {
        /*dispatch(setLoader(false));*/
    });
};

const actualizar = () => (dispatch, getStore) => {
    /*const { values } = getStore().createConfigutarion;

    const data = formatData(values)*/

    const formatData=getStore().form.createConfigutarion.values

    api.put(`configurations/update_configuration`,formatData).then(() => {
        NotificationManager.success('El contacto se actualizó correctamente', 'Éxito', 1000);
        /*dispatch(push('/configuration'));*/
        dispatch(detalle())
    }).catch(() => {
        NotificationManager.error('Hubo error en la actualización', 'ERROR', 0);
    });
};
export const actions={
    detalle,
    actualizar,
}
export const reducers = {
    
};

export const initialState = {
    loader:false

};

export default handleActions(reducers, initialState);