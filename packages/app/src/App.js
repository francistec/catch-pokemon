import React from 'react';
import configureStore from './configureStore';
import { Card } from './components';
import { Provider } from 'react-redux';
import { SearchBoxContainer } from './containers/SearchBox/index';
import './App.css'; 
const initialStore = {};
const store = configureStore(initialStore);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBoxContainer />
        <Card />
      </div>
    </Provider>
  );
}

export default App;
