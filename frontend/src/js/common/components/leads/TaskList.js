import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '../Utils/Grid';
import { standardActions } from '../Utils/Grid/StandardActions';

export default class ListTask extends Component {
    /* componentWillMount = () => {
        const { listarTasks } = this.props;

        listarTasks();
    } */

    render() {
        const { data, loader, onSortChange, listarTasks, page, closeModal, ver } = this.props;
        return (
            <React.Fragment>
                <div className="uk-card uk-card-default uk-padding-small uk-padding uk-margin-auto">
                    <div className="uk-flex uk-flex-between">
                        {/* <Link
                            className="uk-button uk-button-primary uk-border-rounded uk-margin-small-bottom uk-button-small uk-flex"
                            to="/"
                        >
                            Agregar
                            <i style={{ marginLeft: "2px" }} className="material-icons">add_circle_outline</i>
                        </Link> */}

                        <a className="uk-margin-right close" onClick={closeModal}>X</a>

                    </div>
                    <div className="uk-card uk-padding">
                        {/*  <Grid
                    data={data}
                    loading={loader}
                    onPageChange={listarTasks}
                    onSortChange={onSortChange}
                    page={page}
                >
                    <TableHeaderColumn
                        isKey
                        dataField="name"
                        dataSort
                    >
                        Nombre
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="limit_date"
                        dataSort
                    >
                        Fecha Limite
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="description_task"
                        dataSort
                    >
                        Descripción
                    </TableHeaderColumn>
                </Grid> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}