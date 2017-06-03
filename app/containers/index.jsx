import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LocalStorage from '../util/localStore';
import { CITYNAME } from '../Config/Config';

import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            initDone:false
        }
    }
    componentDidMount(){

        let cityName = LocalStorage.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })

        this.setState({
            initDone:true
        })
    }
    render() {
        return (
            <div>
                {this.state.initDone ? this.props.children : <div>加载中</div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
