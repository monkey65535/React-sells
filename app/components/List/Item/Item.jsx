import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './Item.less';

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {distance,img,mumber,price,subTitle,title} = this.props.item;
        return (
            <div className="list-item clearfix">
                <div className="item-img-warpper fl">
                    <img src={img} alt={title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-warpper clearfix">
                        <h3 className="fl">{title}</h3>
                        <span className="fr">{distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {subTitle}
                    </p>
                    <div className="item-price-warpper clearfix">
                        <span className="price fl">￥{price}</span>
                        <span className="mumber fr">已售{mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item