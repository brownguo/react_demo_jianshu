import React,{ Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import {GlobalStyled} from './style.js';
import {IconGlobalStyled} from './static/iconfont/iconfont';
import Header from './common/header'

import store from './store';

class App extends Component{
    render() {
       return(

           <Fragment>
               <GlobalStyled/>
               <IconGlobalStyled/>
               <Provider store={store}>
                   <Header />
                   <BrowserRouter>
                        <Route exact path='/'>Home</Route>
                        <Route exact path='/detail'>Detail</Route>
                   </BrowserRouter>
              </Provider>
           </Fragment>
       )
    }
}
export default App;
