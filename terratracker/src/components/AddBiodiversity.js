import React, { useState } from "react";
import api from "../api";

function AddBiodiversity() {
  const [form, setForm] = useState({
    speciesName: "",
    populationCount: "",
    region: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting data:", form); // 🪶 Debug log
      const res = await api.post("/biodiversity", form);
      console.log("Server response:", res.data);
      alert("✅ Biodiversity data added!");
      setForm({ speciesName: "", populationCount: "", region: "" });
    } catch (err) {
      console.error("❌ Error adding biodiversity data:", err.response?.data || err.message);
      alert("❌ Failed to add data. Check console for details.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Biodiversity Record 🌿</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="speciesName"
          placeholder="Species Name"
          value={form.speciesName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="populationCount"
          placeholder="Population Count"
          value={form.populationCount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={form.region}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          Add Record
        </button>
      </form>
    </div>
  );
}

export default AddBiodiversity;

