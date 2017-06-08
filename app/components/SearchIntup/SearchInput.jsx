import React, { Component } from 'react';

import './SearchInput.less';
class SearchInput extends Component {
    constructor(){
        super();
        this.state = {
            inputVal:""
        }
    }
    componentDidMount(){
        this.setState({
            inputVal:this.props.value
        })
    }
    changeHandle(ev){
        this.setState({
            inputVal:ev.target.value.trim()
        })
    }
    keyHandle(ev){
        if(ev.keyCode !== 13) return;
        console.log(this.state.inputVal);
        this.props.keyUpFn(this.state.inputVal)
    }
    render() {
        return (
            <input type="text" className="search-input" value={this.state.inputVal} placeholder={this.props.placeholder} onChange={this.changeHandle.bind(this)} onKeyUp={this.keyHandle.bind(this)}/>
        );
    }
}

export default SearchInput;