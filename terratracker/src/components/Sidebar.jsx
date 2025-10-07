import { MapPin, BarChart2, Settings, Home } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Map View", icon: <MapPin size={20} /> },
    { name: "Reports", icon: <BarChart2 size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-60 bg-primary text-surface flex flex-col p-4 shadow-card">
      <h2 className="text-2xl font-bold mb-6 text-accent">TerraTracker</h2>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
