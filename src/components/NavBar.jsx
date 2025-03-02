import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import Cookie from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    Cookie.remove("authToken")
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-500 text-white p-2 flex justify-between items-center">
      {/* Left Side - Home Tab */}
      <ul className="flex space-x-4">
        <li>
          <a href="/home" className="hover:underline font-semibold">
            Home
          </a>
        </li>
      </ul>

      {/* Right Side - Logout Button */}
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
