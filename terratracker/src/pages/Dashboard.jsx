export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-secondary">Soil Health</h3>
        <p className="text-muted mt-2">Monitoring regional soil composition...</p>
      </div>
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-secondary">Climate Data</h3>
        <p className="text-muted mt-2">Tracking temperature and rainfall patterns...</p>
      </div>
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-secondary">Biodiversity</h3>
        <p className="text-muted mt-2">Mapping ecosystems and habitats...</p>
      </div>
    </div>
  );
}
