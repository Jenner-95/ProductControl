import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, getMe } from "./redux/modules/cuenta/login";

// maquetado base
import SiderBar from './common/components/layout/Sidebar/SideBar';
import Footer from './common/components/layout/Footer/Footer';

import Navbar from "./common/components/layout/Navbar/Navbar";
import { VerifyLogin } from "./common/components/layout";
import SetPassword from "./common/components/LoginRegister/SetPassword/SetPasswordContainer";


class PrivateRouteBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleOpen: true,
        };
    }

    navToggle = () => {
        this.setState({toggleOpen: !this.state.toggleOpen });
    };

    isAuthenticated = () => {
        const token = localStorage.getItem("token");
        const { getMe, login: { me } } = this.props;
        if (!!token && !!me.username) {
            return true;
        } if (token) {
            getMe();
            return "Verifying";
        }
        return false;
    };

    render() {
        const { component: Component, logOut, login: { me }, ...rest } = this.props;
        const isAuthenticated = this.isAuthenticated();

        return (
            <Route
                {...rest}
                render={props => (isAuthenticated ? (
                    (isAuthenticated === true)
                        ? (
                            (/* me.is_verified */true)
                                ? (
                                    <div>
                                        <main className="main-content p-0 col-sm-12 col-md-12 col-lg-12">
                                            <div className="main-navbar  sticky-top">
                                                <div className="p-0 ">
                                                    <Navbar navToggle={this.navToggle} logOut={logOut} user={me} />
                                                </div>
                                            </div>
                                            <div className="main-content-container px-4 container-fluid">
                                                <Component {...props} />
                                            </div>
                                            <Footer />
                                        </main>
                                    </div>

                                )
                                : (
                                    <SetPassword />
                                )
                        )
                        : (
                            <VerifyLogin />
                        )
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                ))
                }
            />
        );
    }
}

const mstp = state => ({ ...state });

const mdtp = { logOut, getMe };

const ProtectedRoute = connect(
    mstp,
    mdtp
)(PrivateRouteBase);

export default ProtectedRoute;
