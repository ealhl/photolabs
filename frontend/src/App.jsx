import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        favouritePhotos={state.favouritePhotos}
        toggleFavouritePhoto={updateToFavPhotoIds}
        openModal={onPhotoSelect}
        onLoadTopic={onLoadTopic}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          favouritePhotos={state.favouritePhotos}
          toggleFavouritePhoto={updateToFavPhotoIds}
          openModal={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;