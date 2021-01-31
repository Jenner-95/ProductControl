import { connect } from 'react-redux'
import { actions } from  '../../../redux/modules/view_main/view_main';

import ListProductsAll from './ListProductsAll'
// import Products from './Products'

const ms2p = (state) => {
  return {
    ...state.view_main,
  };
};

const md2p = { ...actions };

//==================
// Conection List Company
//==================
  const ListProductAll = connect(ms2p, md2p)(ListProductsAll);
  
//==========================
// Conection Create Company
//==========================
// const CreateProducts = connect(ms2p, md2p)(Products);


  export const connectionProductsAll = {
    ListProductAll,
  }