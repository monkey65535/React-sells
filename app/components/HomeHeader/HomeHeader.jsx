import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,hashHistory } from 'react-router'

import SearchInput from '../SearchIntup/SearchInput';
import './HomeHeader.less';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
            this.state = {
                inputVal:''
            }
    }
    enterHandle(value){
        console.log(value)
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
    render() {
        return (
            <div id="home-header" className="clearfix">
                <div className="fl home-header-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="fr home-header-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput placeholder="请输入关键字" value="" keyUpFn={this.enterHandle.bind(this)}/>
                    </div>

                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 
export default HomeHeader