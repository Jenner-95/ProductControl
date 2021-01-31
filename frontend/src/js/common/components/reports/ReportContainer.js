import { connect } from 'react-redux'
import { actions } from  '../../../redux/modules/reports/reports';

import Reports from './Reports'

const ms2p = (state) => {
  return {
    ...state.reports,
  };
};

const md2p = { ...actions };

//==========================
// Conection Reports
//==========================
const Report = connect(ms2p, md2p)(Reports);


  export const connectionReport = {
    Report,
  }