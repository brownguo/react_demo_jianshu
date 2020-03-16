//创建action

//redux thunk可以让action返回函数
import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable'


//异步获取数据都要写在这里， 异步返回的数据都要用fromJS转换一下。

const change_list = (data) =>({
      type:actionTypes.CHANGE_SEARCH_LIST,
      data:fromJS(data),
      totalPage:Math.ceil(data.length / 2)
});

export const headerSearchFocus = () =>({
      type:actionTypes.HEADER_SEARCH_FOCUS
});

export const headeSearchBlur = () =>({
      type:actionTypes.HEADER_SEARCH_BLUR
});

export const getList = () =>{
      return (dispatch) =>{
            axios.get('/api/headerList.json').then((res) =>{
                  const data = res.data;
                  const action = change_list(data.data);
                  dispatch(action)
            }).catch(() =>{
                  console.log('error');
            })
      }
};

export const mouseEnter = ()=>({
      type:actionTypes.SEARCH_MOUSE_ENTER
});

export const mouseLeave = ()=>({
      type:actionTypes.SEARCH_MOUSE_LEAVE
});

export const handleSearchList = (page) =>({
      type:actionTypes.HANDLE_SEARCH_LIST,
      page
});