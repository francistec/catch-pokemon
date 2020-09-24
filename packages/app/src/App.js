import React from 'react';
import { Card, SearchBox } from './components';
import  {Pokemon}  from '@catch-pokemon/services';
import './App.css';

function App() {

  return (
    <>
     
      <div className="App">
        <SearchBox />
        <Card />
      </div>
    </>
  );
}

export default App;
