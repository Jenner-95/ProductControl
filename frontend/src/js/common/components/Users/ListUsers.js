import React, {Component} from 'react';
import { TableHeaderColumn } from "react-bootstrap-table";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";
import '../../../../style/fuentes.css'


class ListUsers extends Component {
    componentWillMount = () => {
        const { listar } = this.props;

        listar();
    }

    handleSearch = (e) => {
        const { listar, filterUsers } = this.props;
        if (e.target.value != '') {
            filterUsers(e.target.value);
        } else {
            listar();
        }
    }

    render() {
        const {data, loader, onSortChange, eliminar, listar, page } = this.props;
        return (
            <React.Fragment>
                <br />
                <h4 className="fuente">
                    USUARIOS
                </h4>
   
                <div className="uk-card  uk-margin-auto">
                    <div className="uk-flex uk-flex-between botton-padding uk-padding-remove-bottom uk-margin-auto-top@s">
                        
                        <a
                            disabled
                            href="/#/"
                        >
                        </a>
                        
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip"><i className="material-icons text-dark">search</i></span>
                            <input
                            type="text"
                            className="uk-input uk-border-rounded "
                            onChange={this.handleSearch}
                            
                            />
                        </div>



                    </div>

                    <Grid
                        hover
                        striped
                        className="job-padding"
                        data={data}
                        loading={loader}
                        onPageChange={listar}
                        onSortChange={onSortChange}
                        page={page}
                        
                        >
                        <TableHeaderColumn
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={standardActions({ editar: "users" })}
                        >
                            
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="username"
                            dataAlign="center"
                            dataSort
                            className="text-dark"
                        >
                            USUARIO
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            dataField="first_name"
                            dataAlign="center"
                            dataSort
                            className="text-dark"
                        >
                            NOMBRE
                        </TableHeaderColumn>
                        {/* <TableHeaderColumn
                            dataField="last_name"
                            dataSort
                        >
                            Apellido
                        </TableHeaderColumn> */}
                        <TableHeaderColumn
                            dataField="role"
                            dataAlign="center"
                            dataSort
                            className="text-dark"
                        >
                            ROLL
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="email"
                            dataAlign="center"
                            dataSort
                            className="text-dark"
                        >
                            E-MAIL
                        </TableHeaderColumn>

                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default ListUsers;
