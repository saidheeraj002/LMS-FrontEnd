import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Cookie from 'js-cookie'


export default function SubjectPage() {
  const { name,id } = useParams();
  const navigate = useNavigate();
  const subjectId = parseInt(id, 10)
  console.log(id)

  const [lessons,setLessons] = useState([]);

  useEffect(()=>{
      const getSubjectsList = async () => {
          const token = Cookie.get("authToken"); // Retrieve token
          //console.log(token)
          if (!token) {
            console.error("No token found. Please log in.");
            return;
          }
        
          try {
            const response = await fetch(`http://127.0.0.1:8000/api/lesson_data/${subjectId}`, {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`, // Use stored token
              },
            });
        
            const data = await response.json();
            console.log("Lessons List:", data);
            setLessons((prev)=>[...prev,...data])
          } catch (error) {
            console.error("Error fetching users:", error);
          }
      }
      getSubjectsList();
    },[])

  function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className="">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Subject Page Content */}
      <div className="flex flex-col items-center justify-center h-full p-6">
        {/* Subject Title */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          {name.toUpperCase()}
        </h1>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {lessons.length > 0 ? (
            lessons.map((topic, index) => (
              <div
                key={index}
                onClick={() => navigate(`/subject/${name}/${subjectId}/topic/${topic.name}/${topic.id}`)}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 text-center cursor-pointer hover:bg-gray-100"
              >
                <h2 className="text-lg font-semibold text-blue-600">{topic.name}</h2>
                <p className="text-gray-700 mt-2">Learn about {topic.name}.</p>
              </div>
            ))
          ) : (
            <p className="text-red-500">No topics found for {name}.</p>
          )}
        </div>
      </div>
    </div>
  );
}


// in {name}