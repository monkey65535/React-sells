import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeAd from '../../../components/HomeAd/HomeAd';
import {getAdData} from '../../../fetch/Home/Home';

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);

        this.state = {
            adData: []
        }
    }
    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const data = json;
            if (data.length) {
                this.setState({adData: data});
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.adData.length? <HomeAd data={this.state.adData}/>: <div>数据加载中···</div>}
            </div>
        )
    }
}

export default Ad