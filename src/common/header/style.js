import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href : '/'
})`
    position: absolute;
    top : 0;
    left :0;
    display: block;
    width:100px;
    height:56px;
    background :url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right:70px;
    box-sizing:border-box;
    height: 100%;
    margin : 0 auto;
`;

export const NavItem = styled.div`
   line-height :56px;
   padding : 0 15px;
   font-size : 17px;
   color:#ccc;
   
   &.left{
        float :left;
   }
   
   &.right{
        float:right;
        color:#969696;
   }
   
   &.active{
       color:#ea6f5a;
   }
`;

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px; 
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        
        &.focused{
            background:green;
            color:#fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    margin-top:9px;
    padding: 0 30px 0 20px;
    width:160px;
    margin-left:20px;
    height:38px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:green;
    &::placeholder {
        color:#999;
    }
    &.focused{
        width:300px;
    } 
    
    &.slide-enter{
        transition: all .2s ease-out;
    }
    
    &.slide-enter-active{
        width : 300px;
    }
    
    &.slide-exit{
        width : 300px;
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width : 160px;
    }
`;

export const SearchInfo = styled.div`
    position :absolute;
    left:0;
    top:56px;
    width:240px;
    padding: 0 20px;
    box-shadow : 0 0 8px rgba(0,0,0,2);
    border-radius:3px;
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bootom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor: pointer;
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`;

export const SearchInfoItem = styled.a`
    font-size:12px;
    line-height:20px;
    padding:0 5px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:3px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    cursor: pointer;
`;
export const Addition = styled.div`
    position :absolute;
    right: 0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float: right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    font-size:14px;
    border:1px solid #ec6149;
    &.reg{
        color:#ec6149
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }
`;
