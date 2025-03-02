// src/routes.js
import { useRoutes,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import SubjectPage from "./pages/Subjects/SubjectPage";
import TopicChatPage from "./pages/Topics/TopicChatPage";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Login /> },
    { path: "/home", element:  <PrivateRoute><Home /></PrivateRoute> },
    { path: "/subject/:name/:id", element:  <PrivateRoute><SubjectPage /></PrivateRoute> },
    { path: "/*", element: <Navigate to="/" /> },
    { path:"/subject/:subject/:subject_id/topic/:topic/:topic_id", element: <PrivateRoute><TopicChatPage /></PrivateRoute>}
    
  ]);
};

export default AppRoutes;
