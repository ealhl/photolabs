import React from 'react';
import { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  useEffect(() => {
    console.log(photo); // Log the selected photo data
  }, [photo]); 

  const handleCloseClick = () => {
    closeModal(); // Call closeModal function when the close button is clicked
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
