import React, { Component } from 'react';
import apiKey from '../config.js'
import axios from 'axios';
import { BrowserRouter, Route,Switch, NavLink } from 'react-router-dom';

//App components'
import Nav from './Nav';
import NotFound from './NotFound';
import Photo from './Photo';
import SearchForm from './SearchForm'

const key = apiKey;
let requestCats = axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=cats&per_page=24&format=json&nojsoncallback=1`)
let requestDogs = axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
let requestComputers = axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=computers&per_page=24&format=json&nojsoncallback=1`)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      computers: []
    }
  }

  componentDidMount() {
    this.dataCall()
    this.performSearch()
  }

  dataCall = () => {
    axios.all([requestCats, requestDogs, requestComputers]).then(axios.spread((...responses) => {
      this.setState({
        cats: responses[0].data.photos.photo,
        dogs: responses[1].data.photos.photo,
        computers: responses[2].data.photos.photo
      })
    })).catch(err => {
      console.log('Error fetching and parsing data', err)
    })
  }

  performSearch = (query = 'pc') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.performSearch(this.query.value)
    e.currentTarget.reset();
  }

  render() {

    return (
      <BrowserRouter>
        <SearchForm data={this.state} onSearch={this.performSearch} handle={this.handleSubmit} query={this.query}/>

        <Switch>
          <Route path="/:name/:topic" component={SearchForm}/>
          <Route path="/:name" render={ () => <Photo data={this.state.photos}/> }/>
          <Route exact path="/cats" render={ () => <Photo data={this.state.cats} results='cats'/>}/>
          <Route exact path="/dogs" render={ () => <Photo data={this.state.dogs} results='dogs'/>}/>
          <Route exact path="/computers" render={ () => <Photo data={this.state.computers} results='computers'/>}/>
        </Switch>
          
      </BrowserRouter>  
    )
  }
}


// <Switch>
// <Route exact path="/" render={ () => <Photo data={this.state.photos} />}/>
// <Route path="/cats" render={ () => <Photo data={this.state.cats} results='cats'/>}/>
// <Route path="/cats" render={ () => <Photo data={this.state.cats} results='cats'/>}/>
// <Route path="/dogs" render={ () => <Photo data={this.state.dogs} results='dogs'/>}/>
// <Route path="/computers" render={ () => <Photo data={this.state.computers} results='computers'/>}/>
// </Switch>

{/* <div className="container">
<form className="search-form" onSubmit={this.handleSubmit}>
  <input type="search" placeholder="Name" ref={(input) => this.query = input} placeholder="Search" required/>
  <button type="submit" className="search-button">
    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  </button>
</form>
</div> */}