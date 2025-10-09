// src/components/AddSoil.js
import React, { useState } from "react";
import api from "../api";

function AddSoil() {
  const [form, setForm] = useState({
    region: "",
    ph: "",
    nutrients: "",
    moisture: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/soil", form);
      alert("Soil data added successfully!");
      setForm({ region: "", ph: "", nutrients: "", moisture: "" });
    } catch (err) {
      console.error("Error adding soil data:", err);
      alert("Failed to add soil data");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Soil Data</h2>
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
          name="ph"
          placeholder="Soil pH"
          value={form.ph}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          name="nutrients"
          placeholder="Nutrient Composition"
          value={form.nutrients}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          name="moisture"
          placeholder="Moisture Level (%)"
          value={form.moisture}
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

export default AddSoil;
