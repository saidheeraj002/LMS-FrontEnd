// src/pages/Home.js
// const Home = () => {
//     return (
//       <div className="flex h-screen items-center justify-center bg-gray-200">
//         <h1 className="text-2xl font-semibold text-green-600">User Logged in Successfully!</h1>
//       </div>
//     );
//   };
  
//   export default Home;
// src/pages/Home.js
import {useAuth} from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const {logout}  = useAuth()
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const userData={
    subjects:["Maths", "Physics","Biology","Social","English"]
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    logout();
    navigate("/");
  };

  return (
    <div className="h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
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

      {/* Page Content */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-2xl font-semibold text-green-600">
          User Logged in Successfully!
        </h1>
      </div>
    </div>
  );
};

export default Home;

  