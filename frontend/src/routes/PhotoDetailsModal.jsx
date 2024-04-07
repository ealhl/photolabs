import React from "react";
import { useEffect } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ photo, closeModal, toggleFavouritePhoto, openModal }) => {
  useEffect(() => {}, [photo]);

  const handleCloseClick = () => {
    closeModal(); // Call closeModal function when the close button is clicked
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
      <div className="photo-details-modal__header">
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt="Selected Photo"
        />
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
      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotosArray}
          favouritePhotos={[]}
          toggleFavouritePhoto={toggleFavouritePhoto}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
