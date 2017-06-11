import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Star.less';

class Star extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            all:5,
            starArr:[]
        }
    }
    componentWillMount(){
        console.log(this.props);
        var Num = parseInt(this.props.max);

        var arr = [];
        for(var i=0; i<Num;i++){
            arr.push(i+1);
        }

        this.setState({
            all:Num,
            starArr:arr
        });
        
    }
    render() {
        return (
            <div>
                <div className="star-container">
                {this.state.starArr.map((e,i) => {
                    const lightClass = this.props.star >= e ? ' light' : ''
                    return <i key={i} className={'icon-star' + lightClass}></i>
                })}
                </div>
            </div>
        );
    }
}

export default Star;