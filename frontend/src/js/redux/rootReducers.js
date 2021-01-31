import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
// eslint-disable-next-line camelcase
import reset_password from './modules/reset_password/reset_password';
import newPassword from './modules/cuenta/newPassword';
import changeCoin from './modules/configurations/ChangeType/ChangeCoin';
import stageSale from './modules/stageSale/stageSale';
import changePwd from './modules/cuenta/changePassword';
import users from './modules/users/users';

import global_config from "./modules/configurations/Globals/Globals";
import products from "./modules/products/products";
import shopping from "./modules/shopping/shopping";
import view_main from "./modules/view_main/view_main";
import reports from "./modules/reports/reports";

export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    routing,
    notificaciones,
    reset_password,
    newPassword,
    changeCoin,
    stageSale,
    changePwd,
    users,    
    global_config,

    products,
    view_main,
    shopping,
    reports,
});
