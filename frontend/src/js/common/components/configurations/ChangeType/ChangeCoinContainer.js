import { connect } from 'react-redux';
import { actions } from '../../../../redux/modules/configurations/ChangeType/ChangeCoin';
import ChangeCoin from './ChangeCoin';


const ms2p = (state) => {
    return {
        ...state.changeCoin,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ChangeCoin);
