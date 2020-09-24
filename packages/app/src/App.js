import React from 'react';
import { Card } from './components';
import SearchBoxContainer from './containers/SearchBox';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <SearchBoxContainer />
        <Card />
      </div>
    </>
  );
}

export default App;
