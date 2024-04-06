import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ numFavoritedPhotos }) => {
  return (
    <div className='fav-badge'>
      <FavIcon ddisplayAlert={numFavoritedPhotos > 0}/>
      {numFavoritedPhotos > 0 && <span className="fav-badge__notification">{numFavoritedPhotos}</span>}
    </div>
  ) 
};

export default FavBadge;