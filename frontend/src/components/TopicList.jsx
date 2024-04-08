import {React, useEffect} from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onLoadTopic }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onLoadTopic={onLoadTopic} />
      ))}
    </div>
  );
};

export default TopicList;
