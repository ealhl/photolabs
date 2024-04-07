import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal"; 

// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavouritePhoto = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavouritePhoto={toggleFavouritePhoto}
        openModal={openModal} 
      />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
    
  );
};

export default App;
