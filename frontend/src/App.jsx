import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from  'mocks/photos';



// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
