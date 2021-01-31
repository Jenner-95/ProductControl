import { connect } from 'react-redux';
import { actions } from '../../../../redux/modules/configurations/ChangeType/ChangeCoin';
import Changes from './ChangesList';


const ms2p = (state) => {
    return {
        ...state.changeCoin,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(Changes);
