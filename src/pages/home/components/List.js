import React,{ Component,Fragment } from 'react';
import { ListItem} from '../style';
import {connect} from 'react-redux';

class List extends Component{
    render() {
        return(
            <Fragment>
                {
                    this.props.list.map((item) => {
                        return(
                            <ListItem key={item.get('id')}>
                                <h3>{item.get('title')}</h3>
                            </ListItem>
                        )
                    })
                }
            </Fragment>

        )
    }
}
const mapState = (state) => {
    return{
        list : state.get('home').get('articleList')
    }
};
export default connect(mapState,null)(List);
