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
// import {useAuth} from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import Navbar from "../components/NavBar";
import Subjects from "./Subjects/Subjects";

const Home = () => {
  // const navigate = useNavigate();
  // const {logout}  = useAuth()
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const userData={
  //   subjects:["Maths", "Physics","Biology","Social","English"]
  // }

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   logout();
  //   navigate("/");
  // };

  return (
    <div className="">
      {/* Navbar */}

      <Navbar />

      {/* Page Content */}
      <Subjects />
     
    </div>
  );
};

export default Home;



//<div className="flex flex-col items-center justify-center h-full p-2">
  {/* Heading */}
 // <h1 className="text-3xl font-bold text-green-600 mb-6">Subjects</h1>

  {/* Subject Cards */}
  // <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  //   {userData.subjects.map((subject, index) => (
  //     <div
  //       key={index}
  //       className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition"
  //       onClick={() => navigate(`/subject/${subject.toLowerCase()}`)}
  //     >
  //       <h2 className="text-lg font-semibold text-blue-600">{subject}</h2>
  //       <p className="text-gray-700 mt-2">
  //         Explore {subject} topics and more.
  //       </p>
  //     </div>
  //   ))}
  // </div>
//</div>
  