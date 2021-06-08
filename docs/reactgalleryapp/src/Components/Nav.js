import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import SearchForm from './SearchForm'

const Nav = ({ match }) => (
  <div>
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/computers'>Computers</NavLink></li>
      </ul>
    </nav>
    
    {/* <Route exact path="/:name" render={ () => <Photo data={this.state.photos} />}/> */}
  </div>

  
)

export default Nav;