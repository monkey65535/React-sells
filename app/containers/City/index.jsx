import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import LocalStorage from '../../util/localStore';
import { CITYNAME } from '../../Config/Config';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import CurrentCity from '../../components/CurrentCity/CurrentCity';
import CityList from '../../components/CityList/CityList';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    changeCity(newCity){
        if(newCity == null) return;
        // 修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        // 修改localStorage
        LocalStorage.setItem(CITYNAME,newCity);

        // TODO 跳转到首页
        hashHistory.push('/')
    }

    render() {
        return (
            <div>
                <HeaderBar title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
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
)(City);
