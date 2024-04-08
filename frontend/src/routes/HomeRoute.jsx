import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({
  topics,
  photos,
  favouritePhotos,
  toggleFavouritePhoto,
  openModal,
  onLoadTopic
}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritePhotos={favouritePhotos}  onLoadTopic={onLoadTopic}/>
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavouritePhoto={toggleFavouritePhoto}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;