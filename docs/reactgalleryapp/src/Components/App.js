import React from 'react';
import apiKey from '../config.js'
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components'
import Nav from './Nav';
import NotFound from './NotFound';
import Photo from './Photo';

const key = apiKey;

// const componentDidMount = () => {
//   axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d319c0c494ad5f2bdc26170edb6b9a1c&text=cats&per_page=24&page=cats&format=json&nojsoncallback=1')
//     .then(response => {
//       response.data.photos.photo
//     })
//     .catch(error => {
//       console.log('Error fetching and parsing data', error)
//     });
// }

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Nav} />
    </Switch>
  </BrowserRouter>
);

export default App;