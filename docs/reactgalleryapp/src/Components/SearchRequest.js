import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Photo from './Photo'
import Render from './Render'

class SearchRequest extends Component {

    render() {
        return (
            <Render onSearch={query => this.props.onSearch(query)} query={this.props.match.params.query} data={this.props.data}/>
        );
    };
};

export default withRouter(SearchRequest)