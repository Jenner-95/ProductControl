import { connect } from 'react-redux'
import {actions} from '../../../../redux/modules/configurations/Globals/Globals'


import ConfigurationScreen from './Configuration'


const ms2p = (state) => {
  return {
    ...state.global_config,
  };
};

const md2p = { ...actions };

//===========================
// Conection Configuration
//===========================
/*const ListTypeClient = connect(ms2p, md2p)(TypeClienstScreen);*/
  
//==========================
// Conection Configuration
//=========================?
/*const container= connect(ms2p, md2p)(ConfigurationScreen);*/

export default connect(ms2p, md2p)(ConfigurationScreen);


