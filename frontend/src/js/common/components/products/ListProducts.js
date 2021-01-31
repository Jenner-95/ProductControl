import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";
import '../../../../style/fuentes.css';


export default class ListProducts extends Component {
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

    imageFormatter = (cell, row) => {
        return "<img src='"+cell+"'/>" ;
      }


    render() {
        const { data, loader, onSortChange, eliminar, page, listar } = this.props;
        return (
            <React.Fragment>
                <br />
                <h4 className="companias_title">PRODUCTOS</h4>
                <div className="uk-card uk-padding-small uk-padding uk-margin-auto">
                    <div className="uk-flex uk-flex-between uk-padding-remove-bottom uk-margin-auto-top@s">

                        <Link
                            className="uk-button btn-dark uk-border-rounded uk-margin-small-bottom uk-button-small uk-flex"
                            to="/product/create"
                        >
                            Crear Productos
                            {/* <i style={{marginLeft: "2px"}} className="material-icons">add_circle_outline</i> */}
                        </Link>
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip"><i className="material-icons text-dark">search</i></span>
                                <input
                                    type="text"
                                    className="uk-input uk-border-rounded uk-width-1"
                                    onChange={this.handleSearch}
                                />
                        </div>
                    </div>
                    <div className="uk-card job-padding">
                        <Grid
                            hover
                            striped
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
                                dataFormat={standardActions({ 
                                    editar: "product", 
                                    ver: "product", 
                                    eliminar 
                                })}
                            >
                                
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                dataAlign="center"
                                dataField="sample"
                                dataSort
                                className="text-dark"
                                dataFormat={this.imageFormatter}
                            >
                                IMAGEN
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                isKey
                                dataField="name"
                                dataAlign="center"
                                dataSort
                                className="text-dark"
                            >
                                NOMBRE
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                dataField="price"
                                dataAlign="center"
                                dataSort
                                className="text-dark"
                            >
                                PRECIO
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                dataField="stock"
                                dataAlign="center"
                                dataSort
                                className="text-dark"
                            >
                                STOCK
                            </TableHeaderColumn>                    

                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
