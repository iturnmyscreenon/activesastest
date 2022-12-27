import { useState, useEffect, useContext, createContext } from 'react';
import React from 'react';

const ApiContext = createContext();

export function ApiContextProvider({children}) {
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async () => {
    const response = await fetch('http://localhost:5000/api/numbers');
    const data = await response.json();

    return data
  };
 
useEffect(() => {
  fetchNumbers().then((data) => {
    setNumbers(data);
  });
}, []);

  const refreshData = () => {
    fetchNumbers().then((data) => {
      setNumbers(data);
    });
  }

  return (
    <ApiContext.Provider
      value={{
        numbers, refreshData
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  return useContext(ApiContext);
}


