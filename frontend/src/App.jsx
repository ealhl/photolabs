import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';



// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
