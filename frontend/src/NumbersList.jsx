import React from 'react';
import './NumbersList.css';
import PropTypes from 'prop-types';

function NumbersList({numbers}) {
 
  return (
    <ul className="numbers-list">
      {numbers.map(number => (
      <li key={number} className="numbers-list-item">{number}</li>
      ))}
    </ul>
  );
}

export default NumbersList;
