import React from 'react';
import Form from './components/Form';
import NumbersList from './components/NumbersList';
import './App.css';
import { ApiContextProvider } from './contexts/ApiContext';


function App() {
  return (
    <div className="App">
      <h1>ACTIVE SAS</h1>
      <ApiContextProvider>
        <Form />
        <NumbersList />
      </ApiContextProvider>
    </div>
  );
}

export default App;