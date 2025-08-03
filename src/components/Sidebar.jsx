const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
      <ul className="space-y-5">
        <li>📦 Dashboard</li>
        <li>👤 Profile</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;