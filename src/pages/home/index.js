import React,{ Component } from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import BannerImg from '../../static/images/banner.jpg';

import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';



class Home extends Component{
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={BannerImg} alt="banner.." />
                    <Topic />
                    <List />
                </HomeLeft>

                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;