// src/components/AddBiodiversity.js
import React, { useState } from "react";
import api from "../api";

function AddBiodiversity() {
  const [form, setForm] = useState({
    species: "",
    population: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/biodiversity", form);
      alert("Biodiversity data added!");
      setForm({ species: "", population: "", location: "" });
    } catch (err) {
      console.error("Error adding biodiversity data:", err);
      alert("Failed to add data");
    }
  };

  return (
    <div className="p-4">
      <h2>Add Biodiversity Record</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="species"
          placeholder="Species"
          value={form.species}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="population"
          placeholder="Population"
          value={form.population}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default AddBiodiversity;
