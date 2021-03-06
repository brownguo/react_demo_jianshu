import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1,
});

export default (state = defaultState,action) => {

    switch (action.type) {
        case actionTypes.HEADER_SEARCH_FOCUS:
            return state.set('focused',true);

        case actionTypes.HEADER_SEARCH_BLUR:
            return state.set('focused',false);

        case actionTypes.SEARCH_MOUSE_ENTER:
            return state.set('mouseIn',true);

        case actionTypes.SEARCH_MOUSE_LEAVE:
            return state.set('mouseIn',false);

        case actionTypes.CHANGE_SEARCH_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);


        case actionTypes.HANDLE_SEARCH_LIST:
            return state.set('page',action.page);

        default:
            return state;
    }
}
