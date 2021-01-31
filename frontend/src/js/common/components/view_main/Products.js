// import React, { Component } from 'react'
// import ProductForm from './ProductForm';
// import '../../../../style/fuentes.css';
// // import "./industrystyle.css";
// export default class Products extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {sample: null};
//     }

//     setSample = (sample) => {
//         this.setState({sample});
//     };

//     update = (data) => {
//         const { actualizar } = this.props;
//         update({...data, sample: null}, [{file: this.state.sample, name: "sample"}]);
//     };

//     componentWillMount = () => {

//         const { match, detalle } = this.props;
//         if (match.params.id) {
//             const id = match.params.id;
//             detalle(id);
//         }
//     }

//     render() {

//         const { registrar, actualizar, match, location } = this.props
//         const fn = match.params.id ? this.update : registrar
//         const isActualizar = (match.params.id) ? true : false


//         return (
//             <div>
//                 <br />
//                 <h4 className="industrias_nueva_title ">
//                     {
//                         (isActualizar)
//                             ? 'DETALLE PRODUCTO'
//                             : 'NUEVO PRODUCTO'
//                     }
//                 </h4>
//                 <div className="contact-div">
//                 <ProductForm
//                     setSample={this.setSample}
//                     onSubmit={fn}
//                     ver={location.pathname.includes('ver') && true}
//                 />
//             </div>
//             </div>
//         )
//     }
// }
