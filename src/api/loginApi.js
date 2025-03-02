// src/api/loginApi.js
export const mockLogin = (username, password) => {
    const validUser = { username: "admin", password: "password" };
  
    return username === validUser.username && password === validUser.password
      ? { success: true }
      : { success: false, message: "Invalid credentials" };
};
  