import React from 'react';
import PhotoContainer from './photoContainer';
import NotFound from './NotFound';

//Component to display the photos.
const Photo = (props) => {

  const results = props.data;
  let photos;

  if (results.length > 0) {
    photos = results.map( photo => <PhotoContainer server={photo.server}
                                          id={photo.id}
                                          secret={photo.secret}
                                          key={photo.id} />
    );
  } else {
    photos = <NotFound />;
  };

  return (
    <div className="photo-container">
      <h2>{props.results} Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
};

export default Photo;
