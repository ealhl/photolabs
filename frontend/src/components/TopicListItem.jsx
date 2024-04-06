import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({topic}) => {
  return (
    <div className="topic-list__item">
      <a href={`/${topic.slug}`}>{topic.title}</a>

    </div>
  );
};

export default TopicListItem;
