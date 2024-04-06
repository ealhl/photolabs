import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <a href={`/${props.topic.slug}`}>{props.topic.title}</a>

    </div>
  );
};

export default TopicListItem;
