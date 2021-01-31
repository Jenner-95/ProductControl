import { connect } from 'react-redux'
import { actions } from  '../../../redux/modules/GestionLeads/registerlead'

import LeadModal from './LeadModal'

const ms2p = (state) => {
    return {
        ...state.lead,
    };
};
const md2p = {...actions};


export default connect(ms2p, md2p)(LeadModal);