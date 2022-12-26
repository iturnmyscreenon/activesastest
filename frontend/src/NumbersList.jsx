import React, { useState, useEffect } from 'react';
import './NumbersList.css';


function NumbersList() {
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async () => {
    const response = await fetch('http://localhost:5000/api/numbers');
    const data = await response.json();
    setNumbers(data);
  };

 useEffect(() => {
    fetchNumbers();
  }, []);

  return (
    <ul className="numbers-list">
      {numbers.map(number => (
      <li key={number} className="numbers-list-item">{number}</li>
      ))}
    </ul>
  );
}

export default NumbersList;
