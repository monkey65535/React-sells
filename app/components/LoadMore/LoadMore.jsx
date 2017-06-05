import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './LoadMore.less';
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    LoadMoreHandle(){
        this.props.loadMoreFn();
    }
    render() {
        return (
            <div className="load-more">
                {this.props.isLoadingMore ? <span>加载中···</span> : <span onClick = {this.LoadMoreHandle.bind(this)}>加载更多</span>}
            </div>
        )
    }
}

export default LoadMore
