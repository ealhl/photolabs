import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';



// Note: Rendering a single component to build components in isolation
//Refactor PhotoListItem to use props. Then pass in the sampleDataForPhotoListItem via props.
const App = () => {
  return (
    <div className="App">
      <HomeRoute/>
    </div>
  );
};

export default App;
