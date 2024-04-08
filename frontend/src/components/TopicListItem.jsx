import { React, useEffect } from "react";
import "../styles/TopicListItem.scss";
import { use } from "chai";

const TopicListItem = ({ topic, onLoadTopic }) => {

  const onTopicClick = (topic) => {
    onLoadTopic(topic.id);
  }

  return (
    <div className="topic-list__item" onClick={()=> onTopicClick(topic)}>
      <span>
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
