import React, { Component } from 'react';
import apiKey from '../config.js'
import axios from 'axios';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//App components'

import Photo from './Photo';
import Error from './Error'
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
      computers: [],
      loading: true
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
        computers: responses[2].data.photos.photo,
        loading: false
      })
    })).catch(err => {
      console.log('Error fetching and parsing data', err)
    })
  }

  performSearch = (query = 'pc') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  render() {

    return (
      <div className="main-content">
      {
        (this.state.loading)
        ? <p>Loading...</p>
        : 
        <BrowserRouter>

          <Switch>
            <Route  path="/" render={ () => <SearchForm submit={this.performSearch} data={this.state}/> }/>
            <Route  path="/:name/:topic" render={ () => <Photo data={this.state.photos}/> }/>
            <Route  path="/cats" render={ () => <Photo data={this.state.cats} results='cats'/> }/>
            <Route  path="/dogs" render={ () => <Photo data={this.state.dogs} results='dogs'/> }/>
            <Route  path="/computers" render={ () => <Photo data={this.state.computers} results='computers'/> }/>
            <Route component={Error} />
          </Switch>
            
        </BrowserRouter>  
      }
    </div>
    );
  };
};


// <BrowserRouter>
// <SearchForm submit={this.performSearch}/>

// <Switch>
//   <Route exact path="/" render={ () => <Photo data={this.state.photos}/> }/>
//   <Route exact path="/:name/:topic" render={ () => <Photo data={this.state.photos}/> }/>
//   <Route exact path="/cats" render={ () => <Photo data={this.state.cats} results='cats'/> }/>
//   <Route exact path="/dogs" render={ () => <Photo data={this.state.dogs} results='dogs'/> }/>
//   <Route exact path="/computers" render={ () => <Photo data={this.state.computers} results='computers'/> }/>
//   <Route component={Error} />
// </Switch>
  
// </BrowserRouter>  