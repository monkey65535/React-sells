import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '../../../../fetch/Home/Home';

import ListComponent from '../../../../components/List/List';

import './List.less';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            hasMore:false,
            isLoadingMore:false,
            page:1
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

    
    resultHandle(result){
        result.then((re)=> {
            return re.json();
        }).then((json)=>{
            const {hasMore,data} = json;
            // 存储数据
            this.setState({
                hasMore,
                data
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
            </div>
        )
    }
}


export default List