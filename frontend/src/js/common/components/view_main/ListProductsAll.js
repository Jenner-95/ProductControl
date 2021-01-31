import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";
import '../../../../style/fuentes.css';
import {api} from '../../../utility/api';
import { NotificationManager } from "react-notifications";



    
const setSale = (id) => {
    const data = {
        cant: 1,
        prod: id,
    }
    return api.post('sales', data).then((response) => {
        NotificationManager.success('Compra realizada correctamente, su pedido esta en camino', 'Éxito', 3000);

    }).catch((error) => {
        console.log(error);
        NotificationManager.error('Ocurrio un error, Intenta de nuevo', 'ERROR', 0);
    }).finally(() => {
        dispatch({type: SET_LOADER, loader: false});
    });
};



export default class ListProductsAll extends Component {
    componentWillMount = () => {
        const { listar } = this.props;

        listar();
    }

    handleSearch = (e) => {
        const { listar, filterBudgetModules } = this.props;

        if (e.target.value != '') {
            filterBudgetModules(e.target.value);
        } else {
            listar();
        }
    }

  

    render() {
        const { data } = this.props;

        return (
            <React.Fragment>
                <div>
                    <main className="main-content p-0 col-sm-12 col-md-12 col-lg-12">
                        <div className="main-navbar  sticky-top">
                            <div className="p-0 ">
                                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                
                                    <Link 
                                        className="navbar-brand text-warning" 
                                        to="/"
                                    >
                                        ONLINEDEV.GT
                                    </Link>

                                    <div className="navbar-collapse">
                                        <div className="navbar-nav">

                                            <NavLink 
                                                activeClassName="active"
                                                className="nav-item nav-link" 
                                                exact
                                                to="/users"
                                            >
                                                Mis Datos
                                            </NavLink>

                                            <NavLink 
                                                activeClassName="active"
                                                className="nav-item nav-link" 
                                                exact
                                                to="/product"
                                            >
                                                Mis Productos
                                            </NavLink>
                                            <NavLink 
                                                activeClassName="active"
                                                className="nav-item nav-link" 
                                                exact
                                                to="/shopping"
                                            >
                                                Mis Compras
                                            </NavLink>
                                            <NavLink 
                                                activeClassName="active"
                                                className="nav-item nav-link" 
                                                exact
                                                to="/reports"
                                            >
                                                Reportes
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                        <ul className="navbar-nav ml-auto">
                                            <NavLink 
                                                activeClassName="active"
                                                className="nav-item nav-link" 
                                                exact
                                                to="/login"
                                                
                                            >
                                                Iniciar Sesion                
                                            </NavLink>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="main-content-container px-4 container-fluid">
                            <br />
                            <span
                                className="text-uppercase page-subtitle animate__animated animate__flash">PRODUCTOS DESTACADOS
                            </span>
                            <br/>
                            <br/>

                            <div className="card-columns animate__animated animate__bounceInLeft">

                                {data.results &&
                                    data.results.map((items, key) => {
                                        return (
                                            <div key={items.id} className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img src={ `${items.sample}` } className="card-img" alt={items.name} />
                                                </div>
                                                <div className="col-md-8">
                                                    
                                                    <div className="card-body">
                                                        <span className="text-warning">Producto:</span>
                                                        <h5 className="card-title"> {items.name} </h5>
                                                        <span className="text-warning">Precio:</span>
                                                        <p className="card-text">Q.{items.price} </p>
                                                    </div>

                                                    <div className="uk-flex uk-flex-right">

                                                        {items.stock==0 
                                                        ?
                                                        <button
                                                            disabled
                                                            className="uk-button btn-secondary uk-button-small
                                                                            uk-border-rounded uk-flex uk-margin-bottom"
                                                            type="button"
                                                        >
                                                            <i style={{ marginRight: "4px" }} className="material-icons">warning</i>
                                                            SIN STOCK
                                                        </button>
                                                        :
                                                        <button
                                                            className="uk-button btn-secondary uk-button-small
                                                                            uk-border-rounded uk-flex uk-margin-bottom"
                                                            type="button"
                                                            onClick={e => setSale(`${ items.id }`)}
                                                        >
                                                            <i style={{ marginRight: "4px" }} className="material-icons">add_shopping_cart</i>
                                                            COMPRAR
                                                        </button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })}

                            </div>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}
