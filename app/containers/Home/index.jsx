import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

// 引用组件
import HomeHeader from '../../components/HomeHeader/HomeHeader';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader></HomeHeader>
            </div>
        )
    }
}

export default Home
