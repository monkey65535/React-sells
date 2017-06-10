import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader/SearchHeader';
import List from './subpage/List';
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {params} = this.props;
        return (
            <div>
            
                <SearchHeader keyWord={params.keyword}/>
                <List keyWord={params.keyWord} category={params.category}/>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
module.exports = Search