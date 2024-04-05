import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
<div className="photo-list__item">
  <img className="photo-list__item-image" src={props.photo.imageSource} alt="Photo" />
  <img className="photo-list__item-profile" src={props.photo.profile} alt="Profile" />
  <div className="photo-list__item-username">{props.photo.username}</div>
  <div className="photo-list__item-location">{props.photo.location.city}, {props.photo.location.country}</div>
</div>
  );
};

export default PhotoListItem;
