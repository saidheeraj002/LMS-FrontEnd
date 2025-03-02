// src/hooks/useLogin.js
import { useState } from "react";
import { useAuth } from "./useAuth"; 
import {mockLogin} from "../api/loginApi";
import Cookie from 'js-cookie';


export const useLogin = () => {
  const {userloggedin} =useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  // const login = async (username, password) => {
  //   const response = mockLogin(username, password);
  //   if (response.success) {
  //     setIsAuthenticated(true);
  //     userloggedin(true)
  //     setError(null);
  //   } else {
  //     setError(response.message);
  //   }
  // };
  

  const login = async (username, password) => {
    const formData = new URLSearchParams();
    formData.append("grant_type", "password");
    formData.append("username", username);
    formData.append("password", password);
    formData.append("scope", "");
    formData.append("client_id", "string");
    formData.append("client_secret", "string");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: { "Accept": "application/json","Content-Type": "application/x-www-form-urlencoded", },
        body: formData,
      });


      const data = await response.json();
      console.log("Login Response:", data);
      // alert(data)

      if (response.status === 200) {
        setIsAuthenticated(true);
        userloggedin(true)
        Cookie.set('authToken', data?.access_token, { secure: true, sameSite: 'Lax', expires: 1 });
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Login failed. Try again.");
    }
  };

  return { isAuthenticated, login, error };
};



// const response = await fetch(
      //   `api/users?username=${username}&password=${password}`
      // );
//   const users = await response.json();