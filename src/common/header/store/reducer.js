import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused:false
});

export default (state = defaultState,action) => {

    if(action.type === actionTypes.HEADER_SEARCH_FOCUS)
    {
        return state.set('focused',true);
    }

    if(action.type === actionTypes.HEADER_SEARCH_BLUR)
    {
        return state.set('focused',false);
    }

    return state;
}
