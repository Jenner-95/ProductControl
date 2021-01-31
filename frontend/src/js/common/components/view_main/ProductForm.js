// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { validate, validators } from "validate-redux-form";
// import {
//     renderField,
//     AsyncSelectField,
//     SelectField,
//     renderFilePicker,
// } from "../Utils/renderField/renderField";


// const ProductForm = (props) => {
//     const {
//         handleSubmit,
//         ver,
//         actualizar,
//         setSample,
//     } = props;


//     return (
        
//         <form onSubmit={handleSubmit} className="uk-card uk-padding uk-margin-auto uk-flex-1 uk-flex-center" encType="multipart/form-data">
//             <div className="uk-grid uk-flex-center uk-child-width-expand">

//                 <div className="uk-width-1-3@s">

                    
//                         <label className="fuente_campo_nombre">Nombre</label>
//                         <Field
//                             name="name"
//                             className="uk-input uk-border-rounded"
//                             type="text"
//                             component={renderField}
//                             disabled={ver}
//                         />
                   

                   
//                         <label className="fuente_campo_nombre">Precio</label>
//                         <Field
//                             name="price"
//                             className="uk-input uk-border-rounded"
//                             type="number"
//                             component={renderField}
//                             disabled={ver}
//                         />
                   
//                 </div>

//                 <div className="uk-width-1-3@s">
//                     <div>
//                         <label className="fuente_campo_nombre">Existencia</label>
//                         <Field
//                             name="stock"
//                             className="uk-input uk-border-rounded"
//                             type="number"
//                             component={renderField}
//                             disabled={ver}
//                         />
//                     </div>

//                     <div>
//                         <label className="fuente_campo_nombre">Imagen</label>
//                         <br></br>
//                         <Field
//                             name="sample"
//                             className="uk-input uk-border-rounded"
//                             setFile={setSample}
//                             component={renderFilePicker}
//                             disabled={ver}
//                         />
//                     </div>
//                 </div>
//             </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <div className="uk-width-1-3@m uk-margin-auto uk-flex uk-flex-between">
//                         <a
//                             className="uk-button btn-secondary uk-border-rounded  uk-flex"
//                             href="/#/product"
//                         >
//                             { ver ? 'Regresar' : 'Cancelar' } 
//                         </a>
//                         <div></div>
                    
                   
//                     {
//                      !ver
//                         && ( 
//                             <button
//                                 className="uk-button btn-dark uk-border-rounded  uk-flex" 
//                                 type="submit"
//                             >
//                                 { actualizar ? 'Actualizar' : 'Guardar' }
//                             </button>
//                          )
//                     } 
                    
//                 </div>
//         </form>
      
//     );
// };

// export default reduxForm({
//     form: "productForm", // a unique identifier for this form
//     validate: (data) => {
//         return validate(data, {
//             name: validators.exists()('Este campo es requerido'),
//             price: validators.exists()('Este campo es requerido'),
//         });
//     },
// })(ProductForm);
