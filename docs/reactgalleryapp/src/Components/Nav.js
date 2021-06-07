import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Photo from './Photo'

export default class Nav extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.setState({
      cats: this.props.onSearch('cats'),
      dogs: this.props.onSearch('dogs'),
      computers: this.props.onSearch('computers')
    })
  }
  

  render () {
    console.log(this.props)
    return (
      <Photo data={this.props.data}/>
    )
  }
}
