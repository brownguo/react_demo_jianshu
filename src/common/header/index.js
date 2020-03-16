import React,{ Component } from 'react';
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
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";

class Header extends Component{

    getListArea(){

        const { focused ,mouseIn,totalPage,list, page,handleMouseEnter,handleMouseLeave,handleSearchList} = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i = (page - 1) * 2;i < page * 2;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}> {newList[i]} </SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleSearchList(page,totalPage)}>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    }
    render() {
        const {focused,handleInputFocus,handleInputBlur} = this.props;
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
                        <CSSTransition timeout={200} in={focused} classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe624;</i>
                        {this.getListArea()}
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
    }
}

//映射reducer state
const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])

        //focused:state.get('header').get('focused')
    }
};

//发送action
const mapDispathToProps = (dispatch) =>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.headerSearchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.headeSearchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleSearchList(page,totalPage){
            if(page < totalPage)
            {
                dispatch(actionCreators.handleSearchList(page+1));
            }
            else
            {
                dispatch(actionCreators.handleSearchList(1));
            }
        }
    }
};
//链接
export default connect(mapStateToProps,mapDispathToProps)(Header);
