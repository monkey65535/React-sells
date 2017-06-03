import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './HomeHeader.less';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clearfix">
                <div className="fl home-header-left">
                    <span>深圳</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="fr home-header-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>

                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export export default HomeHeader
module.exports = HomeHeader