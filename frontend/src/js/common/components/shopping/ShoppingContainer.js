import { connect } from 'react-redux'
import { actions } from  '../../../redux/modules/shopping/shopping';

import ListShopping from './ListShopping'
import Shopping from './Shopping'

const ms2p = (state) => {
  return {
    ...state.shopping,
  };
};

const md2p = { ...actions };

//==================
// Conection List Company
//==================
  const ListShoppings = connect(ms2p, md2p)(ListShopping);
  
//==========================
// Conection Create Company
//==========================
const Shoppings = connect(ms2p, md2p)(Shopping);


  export const connectionShopping = {
    ListShoppings,
    Shoppings,
  }