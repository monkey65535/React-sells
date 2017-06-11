import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/HeaderBar/HeaderBar';
import Info from './subpage/info';
import Comment from './subpage/Comment';
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {id} = this.props.params;
        return (
            <div>
                <Header  title="商户详情"></Header>
                <Info id={id}></Info>
                <Comment id={id}/>
            </div>
        )
    }
}

export default Detail