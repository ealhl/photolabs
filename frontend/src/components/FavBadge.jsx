import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon ddisplayAlert={isFavPhotoExist > 0}/>
      {isFavPhotoExist > 0 && <span className="fav-badge__notification">{isFavPhotoExist}</span>}
    </div>
  ) 
};

export default FavBadge;