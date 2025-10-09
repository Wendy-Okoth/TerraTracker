// src/components/AddClimate.js
import React, { useState } from "react";
import api from "../api";

function AddClimate() {
  const [form, setForm] = useState({
    region: "",
    temperature: "",
    rainfall: "",
    humidity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/climate", form);
      alert("Climate data added successfully!");
      setForm({ region: "", temperature: "", rainfall: "", humidity: "" });
    } catch (err) {
      console.error("Error adding climate data:", err);
      alert("Failed to add climate data");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Climate Data</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={form.region}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          name="temperature"
          placeholder="Temperature (°C)"
          value={form.temperature}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          name="rainfall"
          placeholder="Rainfall (mm)"
          value={form.rainfall}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          name="humidity"
          placeholder="Humidity (%)"
          value={form.humidity}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
        >
          Add Record
        </button>
      </form>
    </div>
  );
}

export default AddClimate;
