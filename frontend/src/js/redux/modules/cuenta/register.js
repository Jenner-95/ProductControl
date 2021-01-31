import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SUBMIT = 'REGISTER_SUBMIT';
const LOADER = 'REGISTER_LOADER';

export const constants = {
    SUBMIT,
};

// ------------------------------------
// Pure Actions
// ------------------------------------

export const setLoader = loader => ({
    type: LOADER,
    loader,
});

// ------------------------------------
// Actions
// ------------------------------------

export const onSubmit = (data = {}) => (dispatch) => {
    dispatch(setLoader(true));
    api.post('user', data).then(() => {
        dispatch(push("/login"));
        NotificationManager.success('Cuenta creada con éxito, se ha enviado un codigo a tu correo electronico', 'Éxito', 4000);
    }).catch(() => {
        NotificationManager.error('Credenciales incorrectas, vuelva a intentar', 'ERROR', 0);
    }).finally(() => {
        dispatch(setLoader(false));
    });
};

const listOrganization = ()=>(dispatch)=>{

    let array = []

    console.log('Tareas en redux')
    
    api.get('organization')
    .then( (response) =>{

        array = response.results.map( organization => ({ value: organization.id, label: organization.name }) );
        console.log(array)
        return array;

    }).catch(()=>{
        return array
    })
}

export const logOut = () => (dispatch) => {
    localStorage.removeItem('token');
};


export const actions = {
    onSubmit,
    logOut,
    listOrganization
};

export const reducers = {
    [LOADER]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
};

export const initialState = {
    loader: false,
};

export default handleActions(reducers, initialState);
