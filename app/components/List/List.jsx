import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item/Item';

import './List.less';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {data} = this.props;
        return (
            <div className="lists-warpper">
                {data.map((item,index)=>{
                    return  <Item key={index} item={item}></Item>
                })}
            </div>
        )
    }
}

export default List