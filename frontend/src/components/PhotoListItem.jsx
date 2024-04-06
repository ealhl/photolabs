import React, { useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  /* Insert React */
    const [isFavorited, setIsFavorited] = useState(false);
  
    const handleFavButtonClick = () => {
      setIsFavorited(prev => !prev);
    };
    
  return (
<div className="photo-list__item">
  <img className="photo-list__image" src={photo.urls.full} alt="Photo" />
  <div className="photo-list__user_info">
    <img className="photo-list__user-profile" src={photo.user.profile} alt="Profile" />
    <div>
      <div className="photo-list__user-details">{photo.user.username}</div>
     <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
    </div>
    <PhotoFavButton
          onClick={handleFavButtonClick}
          isActive={isFavorited}
        />
  </div>
</div>
  );
};

export default PhotoListItem;
