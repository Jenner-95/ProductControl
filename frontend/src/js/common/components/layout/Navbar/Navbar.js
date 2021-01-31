import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link, NavLink} from "react-router-dom";

const defaultAvatar = require("assets/img/avatar-placeholder.png");


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {dropdownOpen: false};
    }

    toggle = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
        console.log("DROP DOWN")
    };

    render() {
        const { navToggle, logOut, user } = this.props;

        return (
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
                        to="/"
                        onClick={logOut}
                    >
                        Cerrar Sesion              
                    </NavLink>
                </ul>
            </div>
        </nav>

            
            
        );
    }
}

export default Navbar;
