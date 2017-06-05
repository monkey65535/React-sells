import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '../../../../fetch/Home/Home';

import ListComponent from '../../../../components/List/List';
import LoadMore from '../../../../components/LoadMore/LoadMore';
import './List.less';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],                //存储列表信息
            hasMore:false,          //后端返回是否有下一页
            isLoadingMore:false,    //记录加载状态
            page:1                  //下一页的页码
        }
    }
    componentDidMount(){
        // 获取首页数据
        this.loadFirstData();
    }

    loadFirstData(){
        const {cityName} = this.props;
        const result = getListData(cityName,0);
        this.resultHandle(result);
    }

    loadMoreData(){
        // 点击loadMore组件触发
        this.state.isLoadingMore = true;
        const {cityName} = this.props;
        const { page } = this.state;
        const result = getListData(cityName,page);
        this.resultHandle(result);
        // 增加page的技术
        this.setState({
            page:page+1,
            isLoadingMore:false
        })
    }

    resultHandle(result){
        result.then((re)=> {
            return re.json();
        }).then((json)=>{
            const {hasMore,data} = json;
            // 存储数据
            this.setState({
                hasMore,
                data:this.state.data.concat(data)
            })
        })
    }

    render() {
        const {cityName} = this.props;
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {/*列表*/}
                {this.state.data.length ? <ListComponent data={this.state.data}/> : <div>加载中···</div>}
                {/*load...*/}
                {this.state.isLoadingMore ? <div className="loading">加载中···</div> : <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore>}
            </div>
        )
    }
}


export default List