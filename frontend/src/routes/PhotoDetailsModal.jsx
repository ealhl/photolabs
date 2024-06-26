import React from "react";
import { useEffect } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  photo,
  favouritePhotos = [],
  closeModal,
  toggleFavouritePhoto,
  openModal,
}) => {
  useEffect(() => {}, [photo]);

  const handleCloseClick = () => {
    closeModal(); // Call closeModal function when the close button is clicked
  };
  

  const handleFavouriteClick = () => {
    toggleFavouritePhoto(photo.id);
  };

  const similarPhotosArray = Object.values(photo.similar_photos || {});
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseClick}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          onClick={handleFavouriteClick}
          isActive={favouritePhotos.includes(photo.id)} // Pass the isActive prop to PhotoFavButton
        />
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt="Selected Photo"
        />
        <div className="photo-details-modal__photographer-info">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt="Profile"
          />
          <div>
            <div className="photo-details-modal__photographer-details">
              {photo.user.username}
            </div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotosArray}
          favouritePhotos={favouritePhotos}
          toggleFavouritePhoto={toggleFavouritePhoto}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
