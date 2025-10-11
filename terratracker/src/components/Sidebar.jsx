import { NavLink } from "react-router-dom";
import { MapPin, BarChart2, Settings, Home, Plus } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Map View", path: "/map", icon: <MapPin size={20} /> },
    { name: "Reports", path: "/reports", icon: <BarChart2 size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
    { name: "AI Insights", path: "/ai-insights", icon: "🤖" },

  ];

  const dataSections = [
    {
      title: "🌿 Biodiversity",
      items: [
        { name: "View Data", path: "/biodiversity" },
        { name: "Add Record", path: "/biodiversity/add", icon: <Plus size={18} /> },
      ],
    },
    {
      title: "🌦️ Climate",
      items: [
        { name: "View Data", path: "/climate" },
        { name: "Add Record", path: "/climate/add", icon: <Plus size={18} /> },
      ],
    },
    {
      title: "🌍 Soil",
      items: [
        { name: "View Data", path: "/soil" },
        { name: "Add Record", path: "/soil/add", icon: <Plus size={18} /> },
      ],
    },
  ];

  return (
    <aside className="w-60 bg-primary text-surface flex flex-col p-4 shadow-card">
      <h2 className="text-2xl font-bold mb-6 text-accent">TerraTracker</h2>

      {/* Main Navigation */}
      <nav className="space-y-2 mb-6">
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

      <hr className="border-secondary/50 my-4" />

      {/* Data Sections */}
      <div className="space-y-4">
        {dataSections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-accent mb-2">{section.title}</h3>
            <div className="space-y-1 pl-3">
              {section.items.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-2 px-2 py-1 rounded-md transition ${
                      isActive ? "bg-secondary text-accent font-semibold" : "hover:bg-secondary/70"
                    }`
                  }
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

