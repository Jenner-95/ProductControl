import {handleActions} from 'redux-actions';
import {createReducer} from "../../baseReducer/baseReducer";

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    "changeCoin", // identificador dentro del store.
    "config/change-coin", // endpoint donde realizará las peticiones.
    "ChangeForm", // Nombre del formulario.
    "/config/change-coin", // url del componente en el frontend.
);

export default handleActions(reducers, initialState);
