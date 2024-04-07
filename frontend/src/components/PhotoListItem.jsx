import React, { useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo, isFavourite, onFavouriteToggle, openModal}) => {
  /* Insert React */
  const handleFavouriteClick = () => {
    onFavouriteToggle(photo.id);
  };

  const handleClick = () => {
    openModal(photo);
  };
    
  return (
<div className="photo-list__item" onClick={handleClick}>
  <PhotoFavButton
        onClick={handleFavouriteClick}
        isActive={isFavourite} // Pass the isActive prop to PhotoFavButton
  />
  <img className="photo-list__image" src={photo.urls.full} alt="Photo" />
  <div className="photo-list__user_info">
    <img className="photo-list__user-profile" src={photo.user.profile} alt="Profile" />
    <div>
      <div className="photo-list__user-details">{photo.user.username}</div>
     <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
    </div>
  </div>
</div>
  );
};

export default PhotoListItem;
