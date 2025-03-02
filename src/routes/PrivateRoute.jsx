import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Cookie from "js-cookie"

const PrivateRoute = ({ children }) => {
    // return children;
  const { loggedin } = useAuth();
  const token = Cookie.get("authToken")
  if(token && loggedin){
    return children
  }

  return <Navigate to="/" />
//   return loggedin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
