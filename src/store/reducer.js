import {combineReducers} from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store'  //头部reducer
import { homeReducer } from '../pages/home/store';


const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
});

export default reducer;
