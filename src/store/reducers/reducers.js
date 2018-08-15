import * as actionTypes from "../actions/actionTypes";
const initialState = {
    results : [],
    loadingData: true
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.FETCH_RESULT: return state;
        case actionTypes.FETCH_RESULT_START: return {...state, loadingData: state.loadingData };
        case actionTypes.FETCH_RESULT_SUCCESS: 
        // debugger;
        return {
            ...state,
            results: action.results,
            loadingData: false
        }
       default: return state;
    }
}

export default reducer;