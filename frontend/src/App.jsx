import React from 'react';
import Form from './Form';
import NumbersList from './NumbersList';
import './App.css';


function App() {
  const fetchNumbers = async () => {
    const response = await fetch('http://localhost:5000/api/numbers');
    const data = await response.json();
    console.log(Array.isArray(data));
    return data;
  };
  
  return (
    <div className="App">
      <h1>ACTIVE SAS</h1>
      <Form />
      <NumbersList numbers={fetchNumbers()}/>
    </div>
  );
}

export default App;