import React, { Component } from 'react';
import './DetailInfo.less';
import Star from '../Star/Star'
class DetailInfo extends Component {
    render() {
        const {desc,img,price,star,subTitle,title} = this.props.pageInfo;
        return (
            <div id="detail-info-container">
                <div className="info-container clearfix">
                    <div className="info-img-container fl">
                        <img src={img}/>
                    </div>
                    <div className="info-content">
                        <h1>{title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star star={star} max="5"/>
                            <span className="price">￥{price}</span>
                        </div>
                        <p className="sub-title">{subTitle}</p>
                    </div>
                </div>
                {/* 设置 innerHTML */}
                <p dangerouslySetInnerHTML={{__html: desc}} className="info-desc"></p>
            </div>
        );
    }
}

export default DetailInfo;