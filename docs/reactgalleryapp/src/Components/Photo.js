import React from 'react';
import PhotoContainer from './photoContainer'

const Photo = (props) => {

  const results = props.data;
  let photos;

  if (results.length >= 3) {
    photos = results.map( photo => <PhotoContainer server={photo.server}
                                          id={photo.id}
                                          secret={photo.secret}
                                          key={photo.id} />
    );
  };

  return (
    <div className="photo-container">
      <h2>{props.results} Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  )
}

export default Photo
