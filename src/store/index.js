//创建store实例

import { createStore,compose,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


//ReactExtension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    //安装redux-thunk
    applyMiddleware(thunk)
));

export default  store;
