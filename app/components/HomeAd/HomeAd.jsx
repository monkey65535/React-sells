import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <h2 className="home-h2">超值特惠</h2>
                <div className="home-ad-warpper clearfix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="home-ad-item fl">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div> 
        )
    }
}

export default HomeAd