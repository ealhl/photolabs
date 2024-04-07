import { useState, useEffect } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

const useApplicationData = () => {
  const [state, setState] = useState({
    topics: [], // Initialize topics as an empty array
    photos: [], // Initialize photos as an empty array
    favouritePhotos: [], // Initialize favouritePhotos as an empty array
    selectedPhoto: null, // Initialize selectedPhoto as null
    isModalOpen: false, // Initialize isModalOpen as false
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      topics: topics,
      photos: photos,
    }));
  }, []);

  const onPhotoSelect = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
      isModalOpen: true,
    }));
  };

  const updateToFavPhotoIds = (photoId) => {
    setState((prevState) => {
      if (prevState.favouritePhotos.includes(photoId)) {
        return {
          ...prevState,
          favouritePhotos: prevState.favouritePhotos.filter(
            (id) => id !== photoId
          ),
        };
      } else {
        return {
          ...prevState,
          favouritePhotos: [...prevState.favouritePhotos, photoId],
        };
      }
    });
  };

  const onLoadTopic = (topicData) => {
    setState((prevState) => ({
      ...prevState,
      topics: topicData,
    }));
  };

  const onOpenPhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
      isModalOpen: true,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
      isModalOpen: false,
    }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
  };
};

export default useApplicationData;
