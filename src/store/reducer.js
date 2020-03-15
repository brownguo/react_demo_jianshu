import {combineReducers} from 'redux';

import {reducer as headerReducer } from '../common/header/store'  //头部reducer


const reducer = combineReducers({
    header:headerReducer
});

export default reducer;
