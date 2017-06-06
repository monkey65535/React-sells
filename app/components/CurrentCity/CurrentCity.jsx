import React, { Component } from 'react';
import './CurrentCity.less';

class CurrentCity extends Component {
    render() {
        return (
            <div>
                <div className="current-city">
                    <h2>{this.props.cityName}</h2>
                </div>
            </div>
        );
    }
}

export default CurrentCity;