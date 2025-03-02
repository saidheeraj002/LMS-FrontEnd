import { useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Cookie from "js-cookie"
// import { json } from "express";

export default function TopicChatPage() {
  const { subject, topic ,subject_id,topic_id } = useParams();
  const topicId = parseInt(topic_id,10)
  const subjectId =parseInt(subject_id,10)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");


  // Function to format bot responses with markdown-style examples
  const formatBotResponse = (response) => {
    const examples = response.split("\n").filter(line => line.trim() !== "");

    return (
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        {examples.map((example, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg">
            {example.replace(/[*]/g, "").trim()}
          </li>
        ))}
      </ul>
    );
  };

  // Handle sending messages
  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Simulate a chatbot response (Replace this with an API call to AI chatbot if needed)
    // const botResponse = `This is a response about ${topic}.`;
    
      const messageBody = {
        subject_id: subjectId,
        lesson_id: [
          topicId
        ],
        question: input,
        uuid:"hello"
      }

      const token = Cookie.get("authToken"); // Retrieve token
              //console.log(token)
              if (!token) {
                console.error("No token found. Please log in.");
                return;
              }
            
              try {
                const response = await fetch(`http://127.0.0.1:8000/api/virtual_teacher`, {
                  method: "POST",
                  headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`, // Use stored token
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(messageBody)
                });
            
                const data = await response.json();
                console.log("Bot response:", data);
                setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: data.answer }]);
              } catch (error) {
                console.error("Error fetching users:", error);
              }    
    // setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: botResponse }]);
    setInput("");
  };

  return (
    <div className="">
      {/* Reusable Navbar */}
      <NavBar />

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center h-full p-6">
        {/* Topic Title */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6">{topic} in {subject}</h1>

        {/* Chat Interface */}
        <div className="w-full max-w-3/4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="h-64 overflow-y-auto border-b border-gray-300 p-2">
            {messages.length === 0 ? (
              <p className="text-gray-500">Ask anything about {topic}!</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`mb-2 text-${msg.sender === "user" ? "right" : "left"}`}>
                  <p className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                    {formatBotResponse(msg.text)}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Input Box */}
          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
