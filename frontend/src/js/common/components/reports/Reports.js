import React, {Component} from 'react'
import {RenderCurrency} from '../Utils/renderField/renderReadField'
import "../../../../style/fuentes.css";

class Reports extends Component{
    componentWillMount = () => {
        const {reportCustomer} = this.props;
        reportCustomer();
    }
    
    render(){
        const { data } = this.props;
        console.log('data report', data);
        return (
            <div className="mt-3">
                  <h4>REPORTES</h4>
                  {data &&
                    <React.Fragment>
                       <span>TOTAL DE VENTAS POR PRODUCTO</span>
                       <div className="react-bs-container-header table-header-wrapper">

                        <table className="table table-striped table-bordered grid-table-head">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-dark">Producto</th>
                                        <th className="text-dark">Total de Ventas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { data.total_sales_unit &&
                                        data.total_sales_unit.map((item, i) => (
                                            <tr key={i}>
                                                <td></td>
                                                <td>{item.name}</td>
                                                <td>
                                                    { item.total_sales_product == null 
                                                    ?
                                                    <RenderCurrency value={0}/>
                                                    :
                                                    <RenderCurrency value={item.total_sales_product}/>
                                                    }    
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        <br/>
                        <span>TOTAL DE VENTAS GLOBAL</span>
                       <div className="react-bs-container-header table-header-wrapper">

                        <table className="table table-striped table-bordered grid-table-head">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-dark">Usuario</th>
                                        <th className="text-dark">Total de Ventas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { data.total_sales_global &&
                                        data.total_sales_global.map((item, i) => (
                                            <tr key={i}>
                                                <td></td>
                                                <td>{item.first_name } {item.last_name}</td>
                                                <td>
                                                    { item.total_sales_user == null 
                                                    ?
                                                    <RenderCurrency value={0}/>
                                                    :
                                                    <RenderCurrency value={item.total_sales_user}/>
                                                    }    
                                                </td>
                                            </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                        <br/>
                        <span>PROMEDIO DE PRECIOS DE MIS PRODUCTOS</span>
                       <div className="react-bs-container-header table-header-wrapper">

                        <table className="table table-striped table-bordered grid-table-head">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-dark">Promedio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        
                                    <tr key='1'>
                                        <td></td>
                                            { data.average_catalogue_products && 
                                                data.average_catalogue_products == null 
                                                ?
                                                <td>0</td>
                                                :
                                                <td>{data.average_catalogue_products}</td>
                                            }    
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                }
                    
            </div>
        );
    }
}


export default Reports;