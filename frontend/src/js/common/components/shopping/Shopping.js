import React, { Component } from 'react'
import ShoppingForm from './ShoppingForm';
import '../../../../style/fuentes.css';
// import "./industrystyle.css";
export default class Shoppings extends Component {

    componentWillMount = () => {

        const { match, detalle } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            detalle(id);
        }
    }

    render() {

        const { registrar, actualizar, match, location, getProduct } = this.props
        const fn = match.params.id ? actualizar : registrar
        const isActualizar = (match.params.id) ? true : false


        return (
            <div>
                <br />
                <h4 className="industrias_nueva_title ">
                    {
                        (isActualizar)
                            ? 'DETALLE COMPRA'
                            : 'NUEVA COMPRA'
                    }
                </h4>
                <div className="contact-div">
                <ShoppingForm
                    getProduct={getProduct}
                    onSubmit={fn}
                    ver={location.pathname.includes('ver') && true}
                />
            </div>
            </div>
        )
    }
}
