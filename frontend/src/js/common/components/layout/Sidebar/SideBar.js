import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link, NavLink} from "react-router-dom";
import './style.css';

import NavBar from '../Navbar/Navbar';
const defaultAvatar = require("assets/img/avatar-placeholder.png");

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {dropdownOpen: false};
    }
    toggle = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
        console.log("DROP DOWN")
    };


    render() {
        const { toggleOpen, navToggle, logOut } = this.props;
        const { user } = this.props;
        return (
            <aside className={`main-sidebar px-0 col-12 col-md-3 col-lg-2 ${toggleOpen ? '' : 'open'}`}>
                <div className="main-navbar">
                    <nav
                        className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light"
                    >
                        <a href="#" className="w-100 mr-0 navbar-brand">
                            <div className="d-table m-auto">
                                <img
                                    id="main-logo"
                                    className="d-inline-block align-top mr-1"
                                    src={require('assets/img/logo.png')}
                                    alt="Logo"
                                />
                            </div>
                        </a>
                        
                        <a
                            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                            onClick={navToggle}
                        >
                            <i className="material-icons"></i>
                        </a>
                    </nav>
                </div>
                <div className="nav-wrapper">
                    <ul className="nav--no-borders flex-column nav">
                        <li className="nav-item">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle color="light" caret className="nav-item-dropdown border-0">
                                <img
                                    className="user-avatar rounded-circle mr-3"
                                    src={(user.profile && user.profile.avatar) ? user.profile.avatar : defaultAvatar}
                                    alt="User Avatar"
                                />
                                <span className="d-none d-md-inline-block">{user.first_name}</span>
                            </DropdownToggle>
                            
                            <DropdownMenu>
                                <DropdownItem header>Menu</DropdownItem>
                                <DropdownItem>
                                    <Link
                                        tabIndex="0"
                                        to="/user-profile"
                                    >
                                        <i className="material-icons"></i>
                                        Profile
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        tabIndex="0"
                                        to="/file-manager-list"
                                    >
                                        <i className="material-icons"></i>
                                        Files
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        tabIndex="0"
                                        to="/transaction-history"
                                    >
                                        <i className="material-icons"></i>
                                        Transactions
                                    </Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <a tabIndex="0" className="text-danger" onClick={logOut} href="/">
                                        <i className="material-icons text-danger"></i>
                                        Logout
                                    </a>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/#" exact className="nav-link " activeClassName="active">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">fiber_manual_record</i>
                                </div>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" exact className="nav-link " activeClassName="active">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">fiber_manual_record</i>
                                </div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                     
                       
                      
                        <li className="nav-item">
                            <Link to="/reportes/leads" className="nav-link">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">fiber_manual_record</i>
                                </div>
                                <span>Reportes</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reportes/semanal" className="nav-link">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">fiber_manual_record</i>
                                </div>
                                <span>Reportes Semanal</span>
                            </Link>
                        </li>
                     
               
                        <li className="nav-item">
                            <Link to="/users" className="nav-link" activeClassName="active">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">person</i>
                                </div>
                                <span>Usuarios</span>
                            </Link>
                        </li>
                        {/*<li className="nav-item">
                            <Link to="/login" onClick={logOut} className="nav-link">
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">lock</i>
                                </div>
                                <span>Log Out</span>
                            </Link>
                            </li>*/}
                    </ul>
                </div>
            </aside>
        );
    }
}

export default SideBar;
