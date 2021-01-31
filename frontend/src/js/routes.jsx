import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';

import NewPassword from './common/components/LoginRegister/PasswordRecovery/NewPasswordContainer';
import VerificarToken from './VerificarToken';
// UI kit
import 'uikit/dist/css/uikit.min.css';

// Components
import reset_password from './common/components/reset_password/reset_passwordContainer';

import Users from "./common/components/Users/ListUsersContainer";
import CreateUser from "./common/components/Users/UsersContainer";
import ChangePassword from "./common/components/LoginRegister/ChangePassword/passwordContainer";
import {connectionProducts} from './common/components/products/ProductsContainer';
import {connectionShopping} from './common/components/shopping/ShoppingContainer';
import {connectionProductsAll} from './common/components/view_main/ProductsAllContainer';
import {connectionReport} from './common/components/reports/ReportContainer';


require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../style/index.css');

module.exports = (
    <div>
        <div className="container__content">
            <Switch>

                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/" component={connectionProductsAll.ListProductAll}  />
                <Route exact path="/reset_password" component={reset_password} />
                <VerificarToken exact path="/reset_pwd/:token" component={NewPassword} />
                <ProtectedRoute exact path="/change-password" component={ChangePassword} />

                {/* <ProtectedRoute exact path="/" component={Demo} /> */}
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute exact path="/user-profile" component={Profile} />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute exact path="/notifications" component={Notificaciones} />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />


                <ProtectedRoute exact path="/users" component={Users} />
                <ProtectedRoute exact path="/users/create" component={CreateUser} />
                <ProtectedRoute exact path="/users/:id/editar" component={CreateUser} />
                <ProtectedRoute exact path="/users/:id/ver" component={CreateUser} />

                <ProtectedRoute exact path="/product/" component={connectionProducts.ListProduct}  />
                <ProtectedRoute exact path="/product/create" component={connectionProducts.CreateProducts}  />
                <ProtectedRoute exact path="/product/:id/ver" component={connectionProducts.CreateProducts}  />
                <ProtectedRoute exact path="/product/:id/editar" component={connectionProducts.CreateProducts}  />
                
                <ProtectedRoute exact path="/shopping/" component={connectionShopping.ListShoppings}  />
                <ProtectedRoute exact path="/shopping/create" component={connectionShopping.Shoppings}  />
                <ProtectedRoute exact path="/shopping/:id/ver" component={connectionShopping.Shoppings}  />
                <ProtectedRoute exact path="/shopping/:id/editar" component={connectionShopping.Shoppings}  />
                
                <ProtectedRoute exact path="/reports" component={connectionReport.Report}  />
                {/* Not Found */}
                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
