import { useReducer, useEffect } from "react";
import axios from "axios";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(
          (id) => id !== action.payload.id
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        isModalOpen: true,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: null,
        isModalOpen: true,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        selectedPhoto: null,
        isModalOpen: false,
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    topics: [],
    photos: [],
    favouritePhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
    topicClicked: false,
  });

  useEffect(() => {
    const fetchPhotoData = () => {
      axios
        .get("/api/photos")
        .then((res) => {
          dispatch({
            type: ACTIONS.SET_PHOTO_DATA,
            payload: { photos: res.data },
          });
        })
        .catch((err) => console.error("Error fetching topics:", error)); // Make a GET request to fetch photos // Dispatch action to set photoData in state
    };

    const fetchTopicData = () => {
      axios
        .get("/api/topics")
        .then((res) => {
          dispatch({
            type: ACTIONS.SET_TOPIC_DATA,
            payload: { topics: res.data },
          });
        })
        .catch((err) => console.error("Error fetching topics:", error));
    };

    fetchTopicData();

    if (!state.topicClicked) {
      // Check if a topic was clicked before fetching photo data
      fetchPhotoData();
    }
  }, []); // Pass an empty dependency array to run the effect only once after initial render

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const updateToFavPhotoIds = (photoId) => {
    if (state.favouritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const onLoadTopic = (topicId) => {
    axios
      .get(`/api/topics/photos/${topicId}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: res.data },
        });
      })
      .catch((err) => console.error("Error fetching photos by topic:", err));
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
