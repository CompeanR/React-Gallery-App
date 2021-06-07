import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import PhotoContainer from './photoContainer'

const Photo = (props) => {

  const results = props.data.data.photos;
  let photos;

  if (results.length = 24) {
    photos = results.map( photo => <PhotoContainer server={photo.server}
                                          id={photo.id}
                                          secret={photo.secret}
                                          key={photo.id} />
    );
  };

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  )

}

export default Photo
