import { connect } from 'react-redux'
import { actions } from  '../../../redux/modules/products/products';

import ListProducts from './ListProducts'
import Products from './Products'

const ms2p = (state) => {
  return {
    ...state.products,
  };
};

const md2p = { ...actions };

//==================
// Conection List Company
//==================
  const ListProduct = connect(ms2p, md2p)(ListProducts);
  
//==========================
// Conection Create Company
//==========================
const CreateProducts = connect(ms2p, md2p)(Products);


  export const connectionProducts = {
    ListProduct,
    CreateProducts,
  }