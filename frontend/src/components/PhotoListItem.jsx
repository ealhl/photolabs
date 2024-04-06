import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, onFavouriteToggle }) => {
  /* Insert React */
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavouriteClick = () => {
    onFavouriteToggle(photo.id);
  };

  const handleFavButtonClick = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        onClick={handleFavButtonClick}
        isActive={isFavorited} // Pass the isActive prop to PhotoFavButton
      />
      <img className="photo-list__image" src={photo.urls.full} alt="Photo" />
      <div className="photo-list__user_info">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt="Profile"
        />
        <div>
          <div className="photo-list__user-details">{photo.user.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
