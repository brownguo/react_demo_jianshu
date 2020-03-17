import React,{ Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import {GlobalStyled} from './style.js';
import {IconGlobalStyled} from './static/iconfont/iconfont';
import Header from './common/header'

import Home from './pages/home';
import Detail from './pages/detail';

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
                        <Route exact path='/' component={Home} />
                        <Route exact path='/detail/:id' component={Detail} />
                   </BrowserRouter>
              </Provider>
           </Fragment>
       )
    }
}
export default App;
