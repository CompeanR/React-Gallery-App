import React from 'react';

//Component to wrap each photo
const PhotoContainer = (props) => (
      <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
      </li>
);

export default PhotoContainer;
