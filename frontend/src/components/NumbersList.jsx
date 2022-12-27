import './NumbersList.css';
import { useApiContext } from '../contexts/ApiContext';
import React from 'react';


function NumbersList() {
  const {numbers} = useApiContext();


  return (
    <ul className="numbers-list">
      {numbers.map(number => (
      <li key={number} className="numbers-list-item">{number}</li>
      ))}
    </ul>
  );
}

export default NumbersList;
