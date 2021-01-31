import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";
import ShoppingForm from '../../../common/components/shopping/ShoppingForm';

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
    api.get('shopping', params).then((response)=>{
        
        dispatch({type: SET_DATA, data: response});
        dispatch({type: SET_PAGE, page: page});
    }).catch(() => {
    }).finally(()=>{
        dispatch({type: SET_LOADER, loader: false});
    });
};

const registrar = () => (dispatch, getStore) => {
    const formData = getStore().form.shoppingForm.values;
    console.log('data', formData)
    const data = {
        cant:formData.cant,
        prod: formData.prod.value,
    }

    api.post('shopping', data).then((response) => {
        console.log('resp', response)
        NotificationManager.success('Compra registrada correctamente', 'Éxito', 1000);
        dispatch(push("/shopping"));
    }).catch((error) => {
        console.log(error);
        NotificationManager.error('Ocurrio un error al registrar el modulo', 'ERROR', 0);
    }).finally(() => {
        dispatch({type: SET_LOADER, loader: false});
    });


}

const actualizar = () => (dispatch, getStore) => {
    const estado = getStore();
    const formData = estado.form.shoppingForm.values;

    api.put(`shopping/${formData.id}`, formData).then((response) => {
        NotificationManager.success('Compra actualizada correctamente', 'Éxito', 1000);
        dispatch(push("/shopping"));
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {

    });
}

const eliminar = (id) => (dispatch, getStore) => {
    api.eliminar(`shopping/${id}`).then((response) => {
      
        NotificationManager.success('Compra eliminada correctamente', 'Éxito', 1000);
        dispatch(listar());
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {

    });
}


const filterBudgetModules = search => (dispatch) => {
    dispatch({type: SET_LOADER, loader: true});

    api.get(`shopping/search/${search}`).then((response) => {
        dispatch(setData(response));
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {
        dispatch({type: SET_LOADER, loader: false});
    });
};

const getPermissions = (search='') => (dispatch, getStore) => {
    let permissions=[];
    
    api.get('permission').then((response)=>{    
        console.log(response.results)   
        dispatch( set_listPermission( response.results ) )

        response.results.forEach(item =>{
            permissions.push({name: item.name, id: item.id})
        })


    }).catch(()=>{
        return [];
    })

}
const handleChange = id =>(dispatch, getStore)=>{
    
    const { listpermission } = getStore().users
    const permisos = Array.from(listpermission) 
    permisos.forEach(item=>{
        const { values } = getStore().form.shoppingForm
        const newState={
            ...values,
            [item.name]:false
        }
        dispatch(initializeForm("ShoppingForm", newState))
    })
    api.get(`role/${id.value}` ).then((response)=>{      
        if(response.name!="Personalizado"){             
            response.permissions.forEach(item =>{
               
               // getStore().form.BudgetModulesForm.values[item.name]=true
                const { values } = getStore().form.shoppingForm
                const newState={
                    ...values,
                    [item.name]:true
                }
                dispatch(initializeForm("ShoppingForm", newState))
                dispatch({type: SET_PERMISOS_ROL, permisos_rol: true})
        }  
            )         
        }
        else
        {
            dispatch({type: SET_PERMISOS_ROL, permisos_rol: false})
        }
    }).catch(()=>{
    })
};

const detalle = id => (dispatch) => {
    dispatch(setLoader(true));

    api.get(`shopping/${id}`).then((response) => {
        if (response.prod) {
            const prod = {
                value: response.prod.id,
                label: response.prod.name,
            };
            response.prod = prod;
        }

        dispatch(initializeForm('shoppingForm', response));
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {
        dispatch(setLoader(false));
    });
};

const getProduct = () => (dispatch) => {
    let product = [];

    return api
        .get("product")
        .then((response) => {
            product = response.results.map((proyecto) => ({
                value: proyecto.id,
                label: proyecto.name,
            }));
            return product;
        })
        .catch((err) => {
            return product;
        });
};

export const actions = {
    registrar,
    detalle,
    actualizar,
    eliminar,
    listar,
    getProduct,
    filterBudgetModules,
    set_permission,
    getPermissions,
    handleChange,
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
