//创建action

import * as actionTypes from './actionTypes';

export const headerSearchFocus = () =>({
      type:actionTypes.HEADER_SEARCH_FOCUS
});

export const headeSearchBlur = () =>({
      type:actionTypes.HEADER_SEARCH_BLUR
});
