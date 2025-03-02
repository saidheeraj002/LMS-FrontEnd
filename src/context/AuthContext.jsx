import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

  const [loggedin,setLoggedin] = useState(()=>{
    const savedUser = localStorage.getItem("userlogin");
    return savedUser ? JSON.parse(savedUser) : null;
  })

    const userloggedin = (userData) => {
    setLoggedin(userData);
    localStorage.setItem("userlogin", JSON.stringify(userData));
  };

  const logout = () => {
    setLoggedin(null);
    localStorage.removeItem("userlogin");
  };


  return (
    <AuthContext.Provider value={{ loggedin,userloggedin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

