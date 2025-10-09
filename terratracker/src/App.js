import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import BiodiversityList from "./components/BiodiversityList";
import AddBiodiversity from "./components/AddBiodiversity";
import ClimateList from "./components/ClimateList";
import AddClimate from "./components/AddClimate";
import SoilList from "./components/SoilList";
import AddSoil from "./components/AddSoil";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Default dashboard page */}
          <Route path="/" element={<Dashboard />} />

          {/* Biodiversity routes */}
          <Route path="/biodiversity" element={<BiodiversityList />} />
          <Route path="/biodiversity/add" element={<AddBiodiversity />} />

          {/* Climate routes */}
          <Route path="/climate" element={<ClimateList />} />
          <Route path="/climate/add" element={<AddClimate />} />

          {/* Soil routes */}
          <Route path="/soil" element={<SoilList />} />
          <Route path="/soil/add" element={<AddSoil />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

