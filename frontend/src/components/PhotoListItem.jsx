import React, { useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
    const [isFavorited, setIsFavorited] = useState(false);
  
    const handleFavButtonClick = () => {
      setIsFavorited(prev => !prev);
    };
    console.log("props", props);
    console.log("isFavorited", isFavorited);
  return (
<div className="photo-list__item">
  <img className="photo-list__image" src={props.photo.urls.full} alt="Photo" />
  <div className="photo-list__user_info">
    <img className="photo-list__user-profile" src={props.photo.user.profile} alt="Profile" />
    <div>
      <div className="photo-list__user-details">{props.photo.user.username}</div>
     <div className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</div>
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
