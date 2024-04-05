import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {
  return (
    <div className="App">
      <PhotoListItem {...sampleDataForPhotoListItem} />
    </div>
  );
};

export default App;