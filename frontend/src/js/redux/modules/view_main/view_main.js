import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SET_DATA = 'SET_DATA';
const SET_LOADER = 'SET_LOADER';
const SET_REGISTER = 'SET_REGISTER';
const SET_PAGE = 'SET_PAGE';
const SET_PERMISSION='SET_PERMISSION';
const SET_LISTPERMISSION = 'SET_LISTPERMISSION';
const SET_PERMISOS_ROL='SET_PERMISOS_ROL';

export const setLoader = loader => ({
    type: SET_LOADER,
    loader,
});

const set_permission=(id) =>({
    type: SET_PERMISSION,
    id
})

const set_listPermission =( listpermission ) =>({
    type: SET_LISTPERMISSION,
    listpermission
})

const asignar_permiso=(id) => (dispatch) =>{

    dispatch(set_permission(id));
    
}

const listar = ( page = 1) => (dispatch) => {

    dispatch({type: SET_LOADER, loader: true});
    const params = { page }
    api.get('products', params).then((response)=>{
        console.log('response', response)
        
        dispatch({type: SET_DATA, data: response});
        dispatch({type: SET_PAGE, page: page});
    }).catch(() => {
    }).finally(()=>{
        dispatch({type: SET_LOADER, loader: false});
    });
};



export const actions = {
   
    
    listar,
    set_permission,
    asignar_permiso,
   
};

export const reducers = {
    [SET_DATA]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PERMISSION]: (state, { id }) => {
        return {
            ...state,
            permissions:[...state.permissions, id],
        };
    },
    [SET_PERMISOS_ROL]: (state, { permisos_rol }) => {
        return {
            ...state,
            permisos_rol,
        };
    },
    
    [SET_LOADER]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },

    [SET_REGISTER]: (state, { register }) => {
        return {
            ...state,
            register,
        };
    },

    [SET_PAGE]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LISTPERMISSION]: (state, { listpermission }) => {
        return {
            ...state,
            listpermission,
        };
    },
};

export const initialState = {
    loader: false,
    data: {},
    register: null,
    page: 1,
    permissions:[],
    listpermission:[],
    permisos_rol:true,
};

export default handleActions(reducers, initialState);
