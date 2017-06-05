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
    componentDidMount(){

        const loadMoreFn = this.props.loadMoreFn;
        let warpper = this.refs.warpper;
        let winHeight = window.screen.height;

        let timeOutId = null;
        function callBack(){
            const top = warpper.getBoundingClientRect().top;
            if(top && top < winHeight){
                loadMoreFn();
            }
        }

        window.addEventListener('scroll',()=>{
            // 如果isLoadingMore = true 那么不做处理
            if(this.props.isLoadingMore) return;
            if(timeOutId){
                clearTimeout(timeOutId);
            }

            timeOutId = setTimeout(callBack,50);
        },false);

        
    }
    render() {
        return (
            <div className="load-more" ref="warpper">
                {this.props.isLoadingMore ? <span>加载中···</span> : <span onClick = {this.LoadMoreHandle.bind(this)}>加载更多</span>}
            </div>
        )
    }
}

export default LoadMore
