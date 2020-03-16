import { fromJS } from 'immutable';
const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'热会热点',
    },
        {
            id:2,
            title:'手绘',
        }
    ],
    articleList:[{
        id:1,
        title:'Jumpman!',
        desc:'desc..',
    },
        {
            id:2,
            title:'Air Jordan1!',
            desc:'desc..'
        }
    ]
});

export default (state = defaultState,action) => {
    return state;
}
