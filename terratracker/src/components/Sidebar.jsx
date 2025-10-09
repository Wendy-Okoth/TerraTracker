import { NavLink } from "react-router-dom";
import { MapPin, BarChart2, Settings, Home } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Map View", path: "/map", icon: <MapPin size={20} /> },
    { name: "Reports", path: "/reports", icon: <BarChart2 size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
    { name: "Biodiversity", path: "/biodiversity", icon: "🌿" },
    { name: "Climate", path: "/climate", icon: "🌦️" },
    { name: "Soil", path: "/soil", icon: "🌍" },
  ];

  return (
    <aside className="w-60 bg-primary text-surface flex flex-col p-4 shadow-card">
      <h2 className="text-2xl font-bold mb-6 text-accent">TerraTracker</h2>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-secondary text-accent font-semibold" : "hover:bg-secondary/70"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

