import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators }from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";

const Header =  (props) =>{
    return(
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>

                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={200} in={props.focused} classNames="slide">
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe624;</i>
                </SearchWrapper>

            </Nav>
            <Addition>
                <Button className='reg'>注册</Button>
                <Button className='writting'>
                    <i className='iconfont'>&#xe678;</i>
                    写文章
                </Button>
            </Addition>
        </HeaderWrapper>
    )
};


//映射reducer state
const mapStateToProps = (state) => {
    return {
        focused:state.get('header').get('focused')
    }
};

//发送action
const mapDispathToProps = (dispatch) =>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.headerSearchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.headeSearchBlur());
        }
    }
};
//链接
export default connect(mapStateToProps,mapDispathToProps)(Header);
