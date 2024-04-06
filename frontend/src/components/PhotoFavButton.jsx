import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import PropTypes from 'prop-types';

const PhotoFavButton = ({ onClick, isActive }) => {
  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
};

PhotoFavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired, // Define propTypes for isActive
};

export default PhotoFavButton;