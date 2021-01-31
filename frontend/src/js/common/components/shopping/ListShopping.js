import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";
import '../../../../style/fuentes.css';


export default class ListShopping extends Component {
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
        const { data, loader, onSortChange, eliminar, page, listar } = this.props;
        return (
            <React.Fragment>
                <br />
                <h4 className="companias_title">COMPRAS</h4>
                <div className="uk-card uk-padding-small uk-padding uk-margin-auto">
                    <div className="uk-flex uk-flex-between uk-padding-remove-bottom uk-margin-auto-top@s">

                        <Link
                            className="uk-button btn-dark uk-border-rounded uk-margin-small-bottom uk-button-small uk-flex"
                            to="/shopping/create"
                        >
                            Crear Compras
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
                                    ver: "shopping", 
                                })}
                            >
                                
                            </TableHeaderColumn>
                           
                            <TableHeaderColumn
                                isKey
                                dataFormat={(cell) =>{
                                    if(cell){
                                    return cell.name
                                    }
                                    
                                }}
                                dataField="prod"
                                dataAlign="center"
                                dataSort
                                className="text-dark"
                            >
                                PRODUCTO
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                dataField="cant"
                                dataAlign="center"
                                dataSort
                                className="text-dark"
                            >
                                CANTIDAD
                            </TableHeaderColumn>
                            
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
