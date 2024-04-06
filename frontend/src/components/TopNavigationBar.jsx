import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, favouritePhotos }) => {
  const numFavoritedPhotos =
    Array.isArray(favouritePhotos) && favouritePhotos.length > 0
      ? favouritePhotos.length
      : 0;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge numFavoritedPhotos={numFavoritedPhotos} />
    </div>
  );
};

export default TopNavigation;
