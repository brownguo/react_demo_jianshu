import React,{ Component,Fragment } from 'react';
import { ListItem} from '../style';
import {connect} from 'react-redux';
import { Link }from 'react-router-dom';
class List extends Component{
    render() {
        return(
            <Fragment>
                {
                    this.props.list.map((item) => {
                        return(
                            <Link to={"/detail/"+item.get('id')}  key={item.get('id')}>
                                <ListItem>
                                    <h3>{item.get('title')}</h3>
                                </ListItem>
                            </Link>
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
