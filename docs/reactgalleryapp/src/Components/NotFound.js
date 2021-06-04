import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

const NotFound = () => (
    <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
    </li>
)

export default NotFound