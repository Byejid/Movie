import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h2 className="text-2xl font-bold text-red-500 hover:text-red-400 transition">
            Movie Explorer
          </h2>
        </Link>

        <Link to="/" className="hover:text-red-400 transition font-medium">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
