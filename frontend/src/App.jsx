import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';



// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {

  return (
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;
