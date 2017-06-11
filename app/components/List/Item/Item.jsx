import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link } from 'react-router'

import './Item.less';

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {distance,img,mumber,price,subTitle,title,id} = this.props.item;
        return (
            <div className="list-item clearfix">
                <Link to={'/detail/' + id}>
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
                </Link>
            </div>
        )
    }
}

export default Item