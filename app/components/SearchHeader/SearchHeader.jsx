import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link,hashHistory } from 'react-router'

import SearchInput from '../SearchIntup/SearchInput';
import './SearchHeader.less';

class SearchHeader extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHandle(){
        window.history.back();
    }
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
    render() {
        return (
            <div id="search-header" className="clearfix">
                <span className="back-icon fl" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput placeholder="请输入搜索内容" value={this.props.keyWord || ""} keyUpFn={this.enterHandle.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default SearchHeader;