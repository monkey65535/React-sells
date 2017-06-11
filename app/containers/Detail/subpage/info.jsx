import React, {Component} from 'react';
import {getInfoData} from '../../../fetch/detail/detai';

import DetailInfo from '../../../components/DetailInfo/DetailInfo';
class Info extends Component {
    constructor(){
        super();
        this.state = {
            pageInfo:false
        }
    }
    componentDidMount(){
        const {id} = this.props;
       
        var result = getInfoData(id);
        result.then((res) => {
            return res.json();
        }).then((json)=>{
             this.setState({
                pageInfo:json
            });
            console.log(this.state.pageInfo);
        })
    }
    render() {
        return (
            <div>
            {
                
                this.state.pageInfo?<DetailInfo pageInfo={this.state.pageInfo}></DetailInfo>:<div>'数据加载中'</div>
            }
            </div>
        );
    }
}

export default Info;