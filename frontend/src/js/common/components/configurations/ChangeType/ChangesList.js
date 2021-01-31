import React, { Component } from "react";
import { TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
import Grid from "../../Utils/Grid";
import { standardActions } from "../../Utils/Grid/StandardActions";
import "../../../../../style/fuentes.css";

class Changes extends Component {
    componentWillMount = () => {
        this.props.listar();
    };

    render() {
        const {
            data,
            loader,
            searchChange,
            listar,
            page,
            onSortChange,
            eliminar,
        } = this.props;
        return (
            <React.Fragment>
                <br />
                <h4 className="tipocambio_title">TIPO DE CAMBIO</h4>
                <div className="uk-card  uk-padding-small uk-padding uk-margin-auto">
                    <div className="list-button-change  uk-flex uk-flex-between uk-padding uk-padding-remove-bottom uk-margin-auto-top@s">
                        <Link
                            className="uk-button uk-button-primary uk-border-rounded uk-button-small uk-margin-small-bottom uk-flex change-button"
                            to="/config/change-coin/create"
                        >
                            Crear Tipo
                            {/* <i style={{marginLeft: "2px"}} className="material-icons">add_circle_outline</i> */}
                        </Link>
                        <input
                            type="text"
                            className="uk-input uk-border-rounded uk-width-1-5"
                            onChange={(e) => searchChange(e.target.value)}
                            placeholder="Buscar..."
                        />
                    </div>
                    <Grid
                        className="uk-card uk-padding"
                        data={data}
                        loading={loader}
                        onPageChange={listar}
                        onSortChange={onSortChange}
                        page={page}
                        striped
                        hover
                    >
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={standardActions({
                                editar: "change-coin",
                                // ver: "change-coin",
                                eliminar,
                            })}
                        ></TableHeaderColumn>
                        <TableHeaderColumn dataField="coin_code" dataSort className="fuente_header_table">
                            Codigo
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="coin_type" dataSort className="fuente_header_table">
                            Moneda
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField="change_type" dataSort className="fuente_header_table">
                            Cambio
                        </TableHeaderColumn>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Changes;
