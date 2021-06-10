import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router'
import Photo from './Photo'


const SearchRequest = (props) => {
    const state = useState(props.data)
    
    useEffect(() => {
        props.onSearch(props.match.params.query)
      }, []);

    return (
        <Photo data={props.data}/>
    )
}   

export default withRouter(SearchRequest)