import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/" className="block py-2">
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users" className="block py-2">
              👥 Users
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block py-2">
              ⚙️ Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
