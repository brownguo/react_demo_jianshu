const defaultState = {
    focused:false
};

export default (state = defaultState,action) => {

    if(action.type === 'header_search_focus')
    {
        return {
            focused:true
        }
    }

    if(action.type === 'header_search_blur')
    {
        return {
            focused:false
        }
    }

    return state;
}
