import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favouritePhotos, toggleFavouritePhoto }) => {
  const handleFavouriteToggle = (photoId) => {
    toggleFavouritePhoto(photoId);
  };
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={favouritePhotos.includes(photo.id)}
          onFavouriteToggle={handleFavouriteToggle}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
