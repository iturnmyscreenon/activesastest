import React, { useState } from "react";
import "./Form.css";
import NumbersList from "./NumbersList";

function Form() {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/number", {
      method: "POST",
      body: JSON.stringify({ number }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setNumbers(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number">Entrez un nombre :</label>
      <br />
      <input type="text" id="number" value={number} onChange={handleChange} />
      <br />
      <button type="submit" onClick={() => window.location.reload()}>
        Envoyer
      </button>
    </form>
  );
}

export default Form;
