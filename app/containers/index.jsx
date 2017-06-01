import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import LocalStorage from '../util/localStore'; 
import {CITYNAME} from '../Config/Config';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            initDone:false
        }
    }
    componentDidMount(){

        //从localStorage中获取城市
        let cityName = LocalStorage.getItem(CITYNAME);
        if(cityName == null){
            cityName = '北京';
        }
        // TODO 将城市列表存储到redux中

        setTimeout(()=> {
            this.setState({
                initDone:true
            })
        },1000)
    }
    render() {
        return (
            <div>
                {this.state.initDone ? this.props.children : <div>加载中···</div>}
            </div>
        )
    }
}

export default App
