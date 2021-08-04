import React from 'react';

//Component that display a message to the user when there are not results.
const NotFound = () => (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
    </li>
);

export default NotFound;