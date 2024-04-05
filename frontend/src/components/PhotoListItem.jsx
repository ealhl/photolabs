import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list-item">
      <img
        className="photo-list-item__image"
        src={props.imageSource}
        alt="Photo"
      />
      <img
        className="photo-list-item__profile"
        src={props.profile}
        alt="Profile"
      />
        <div className="photo-list-item__username">
          {props.username}
        </div>
      <div className="photo-list-item__location">
        {props.location.city},{" "}
        {props.location.country}
      </div> 
    </div>
  );
};

export default PhotoListItem;
