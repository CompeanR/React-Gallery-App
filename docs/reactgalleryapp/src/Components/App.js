import React, { Component } from 'react';
import apiKey from '../config.js'
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

//App components'
import Nav from './Nav';
import NotFound from './NotFound';
import Photo from './Photo';

const key = apiKey;

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

  mountData() {
    this.setState(
      {
        photos: [this.performSearch('cats')],
        cats: [this.performSearch('cats')],
        dogs: [this.performSearch('dogs')],
        computers: [this.performSearch('computers')]
      }
    )
  }

  performSearch = (query, state) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          state: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  performSearchCats = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=$cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
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
    this.performSearch()
    this.performSearchCats()
    console.log(this.state)


    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="container">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input type="search" name="search" ref={(input) => this.query = input} placeholder="Search" required/>
            <button type="submit" className="search-button">
              <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </button>
          </form>

          <div>
            <nav className="main-nav">
              <ul>
                <li><NavLink to={"/cats"}>Cats</NavLink></li>
                <li><NavLink to={"/dogs"}>Dogs</NavLink></li>
                <li><NavLink to={"/computers"}>Computers</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>

          <Switch>
            <Route exact path="/cats" render={ () => <Nav data={this.state.cats} />}/>
            {/* <Route exact path="/dogs" render={ () => {this.performSearch('dogs'); return <Photo data={this.state} />} }/>
            <Route exact path="/computers" render={}/> */}
          </Switch>

      </BrowserRouter>  
    )
  }
}


