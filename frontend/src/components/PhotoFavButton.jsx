import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ onClick, isActive }) => {
  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
};


export default PhotoFavButton;