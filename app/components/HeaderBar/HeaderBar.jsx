import React, { Component } from 'react';
import './HeaderBar.less';
class HeaderBar extends Component {
    pageBack(){
        window.history.back();
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.pageBack.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default HeaderBar;