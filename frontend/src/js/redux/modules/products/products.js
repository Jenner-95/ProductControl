import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";
import ProductForm from '../../../common/components/products/ProductForm';

const SET_DATA = 'SET_DATA';
const SET_LOADER = 'SET_LOADER';
const SET_REGISTER = 'SET_REGISTER';
const SET_PAGE = 'SET_PAGE';
const SET_PERMISSION='SET_PERMISSION';
const SET_LISTPERMISSION = 'SET_LISTPERMISSION';
const SET_PERMISOS_ROL='SET_PERMISOS_ROL';
const ME = 'LOGIN_ME';

export const setLoader = loader => ({
    type: SET_LOADER,
    loader,
});

export const setMe = me => ({
    type: ME,
    me,
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

export const getMe = () => (dispatch) => {
    api.get('/user/me').then((me) => {
        dispatch(initializeForm('profile', me));
        dispatch(setMe(me));
    })
        .catch(() => {
        }).finally(() => {});
};

const listar = ( page = 1) => (dispatch) => {

    dispatch({type: SET_LOADER, loader: true});
    const params = { page }
    api.get('product', params).then((response)=>{
        console.log('response', response)
        
        dispatch({type: SET_DATA, data: response});
        dispatch({type: SET_PAGE, page: page});
    }).catch(() => {
    }).finally(()=>{
        dispatch({type: SET_LOADER, loader: false});
    });
};

const registrar = () => (dispatch, getStore) => {
    const formData = getStore().form.productForm.values;
    const data = {
        name:formData.name,
        price: formData.price,
        sample: formData.sample,
        stock: 0,
        user: formData.user.value,
    }
    api.post('product', data).then((response) => {
        console.log('resp', response)
        NotificationManager.success('Producto registrado correctamente', 'Éxito', 1000);
        dispatch(push("/product"));
    }).catch((error) => {
        console.log(error);
        NotificationManager.error('Ocurrio un error al registrar el modulo', 'ERROR', 0);
    }).finally(() => {
        dispatch({type: SET_LOADER, loader: false});
    });
}

const actualizar = () => (dispatch, getStore) => {
    const formData = getStore().form.productForm.values;
    console.log('formdata', formData)
    const data = {
        created: formData.created,
        id: formData.id,
        is_active: formData.is_active,
        modified: formData.modified,
        name:formData.name,
        price: formData.price,
        sample: null,
        stock: formData.stock,
        user: formData.user,
    }
    console.log(data)
    api.put(`product/${data.id}`, data).then((response) => {
        NotificationManager.success('Producto actualizado correctamente', 'Éxito', 1000);
        dispatch(push("/product"));
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {

    });
}

const eliminar = (id) => (dispatch, getStore) => {
    api.eliminar(`product/${id}`).then((response) => {
      
        NotificationManager.success('Producto eliminado correctamente', 'Éxito', 1000);
        dispatch(listar());
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {

    });
}


const filterBudgetModules = search => (dispatch) => {
    dispatch({type: SET_LOADER, loader: true});

    api.get(`product/search/${search}`).then((response) => {
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
        const { values } = getStore().form.productForm
        const newState={
            ...values,
            [item.name]:false
        }
        dispatch(initializeForm("ProductForm", newState))
    })
    api.get(`role/${id.value}` ).then((response)=>{      
        if(response.name!="Personalizado"){             
            response.permissions.forEach(item =>{
               
               // getStore().form.BudgetModulesForm.values[item.name]=true
                const { values } = getStore().form.productForm
                const newState={
                    ...values,
                    [item.name]:true
                }
                dispatch(initializeForm("ProductForm", newState))
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

    api.get(`product/${id}`).then((response) => {
        dispatch(initializeForm('productForm', response));
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {
        dispatch(setLoader(false));
    });
};

const getUser = () => (dispatch) => {
    let user = [];

    return api
        .get("user")
        .then((response) => {
            user = response.results.map((proyecto) => ({
                value: proyecto.id,
                label: proyecto.username,
            }));
            return user;
        })
        .catch((err) => {
            return user;
        });
};


export const actions = {
    registrar,
    detalle,
    actualizar,
    eliminar,
    listar,
    getUser,
    
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
    [ME]: (state, { me }) => {
        return {
            ...state,
            me,
        };
    },
};

export const initialState = {
    loader: false,
    data: {},
    me: {},
    register: null,
    page: 1,
    permissions:[],
    listpermission:[],
    permisos_rol:true,
};

export default handleActions(reducers, initialState);
