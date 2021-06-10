import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Photo from './Photo'

//Component that display the data with the current query.
class Render extends Component {

    componentDidMount() {
        this.props.onSearch(this.props.query)
    };

    componentDidUpdate(prevProps) {
        if(prevProps.query !== this.props.query) {
          this.props.onSearch(this.props.query);
        };
      };
    
    render() {
        return (
            <Photo data={this.props.data.photos}/>
        );
    };
};

export default withRouter(Render);