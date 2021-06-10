import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Photo from './Photo'

class SearchRequest extends Component {
    componentDidMount() {
        this.props.onSearch(this.props.match.params.query.value)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.query !== this.props.match.params.query.value) {
          this.props.picSearch(this.props.match.params.query.value);
        }
      }
    
    render() {
        console.log(this.props)
        return (
            <Photo data={this.props.data}/>
        );
    };
};

export default withRouter(SearchRequest)