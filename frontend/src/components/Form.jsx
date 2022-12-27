import React, { useState } from "react";
import "./Form.css";
import { useApiContext } from "../contexts/ApiContext";

function Form() {
  const [number, setNumber] = useState(0);
  const { refreshData } = useApiContext();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const submitNumber = async (event) => {
    await fetch("http://localhost:5000/api/number", {
      method: "POST",
      body: JSON.stringify({ number }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitNumber(event);
    refreshData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number">Entrez un nombre :</label>
      <br />
      <input type="text" id="number" value={number} onChange={handleChange} />
      <br />
      <button type="submit">
        Envoyer
      </button>
    </form>
  );
}

export default Form;
