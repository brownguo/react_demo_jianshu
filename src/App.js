import React,{ Component,Fragment } from 'react';
import {GlobalStyled} from './style.js';
import {IconGlobalStyled} from './static/iconfont/iconfont';
import Header from './common/header'

class App extends Component{
    render() {
       return(
           <Fragment>
               <GlobalStyled/>
               <IconGlobalStyled/>

               <Header />
           </Fragment>
       )
    }
}
export default App;
