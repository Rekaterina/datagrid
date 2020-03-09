import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';
import Table from "./components/Table/Table";
import TableControls from "./components/TableControls/TableControls";
import './App.css';

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-wrapper">
          <header className="header">
            <h1 className="app-title">Employee data</h1>
          </header>
          <main className="main">
            <Table />
            <TableControls />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;