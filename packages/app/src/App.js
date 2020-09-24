import React from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { SearchBoxContainer } from './containers/SearchBox/index';
import { ListContainer } from './containers/List/index';
import './App.css'; 
const initialStore = {};
const store = configureStore(initialStore);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBoxContainer />
        <ListContainer />
      </div>
    </Provider>
  );
}

export default App;
