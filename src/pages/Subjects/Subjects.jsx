import { useEffect, useState } from "react";
import Cookie from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Subjects() {

  const [subjects,setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getSubjectsList = async () => {
        const token = Cookie.get("authToken"); // Retrieve token
        console.log(token)
        if (!token) {
          console.error("No token found. Please log in.");
          return;
        }
      
        try {
          const response = await fetch("http://127.0.0.1:8000/api/subjects_list", {
            method: "GET",
            headers: {
              "Accept": "application/json",
              "Authorization": `Bearer ${token}`, // Use stored token
            },
          });
      
          const data = await response.json();
          console.log("subjects List:", data);
          setSubjects((prev)=>[...prev,...data])
        } catch (error) {
          console.error("Error fetching users:", error);
        }
    }
    getSubjectsList();
  },[])

  return (
    <div className="flex flex-col items-center justify-center h-full p-2">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-600 mb-6">Subjects</h1>

      {/* Subject Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition"
            onClick={() => navigate(`/subject/${subject.title.toLowerCase()}/${subject.id}`)}
          >
            <h2 className="text-lg font-semibold text-blue-600">{subject.title}</h2>
            <p className="text-gray-700 mt-2">
              Explore {subject.title} topics and more.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
