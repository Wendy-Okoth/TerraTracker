import axios from "axios";

// Test GET request to your API
axios.get("http://localhost:5000/api/ping")
  .then(response => {
    console.log("✅ Response:", response.data);
  })
  .catch(error => {
    console.error("❌ Error:", error.message);
  });
