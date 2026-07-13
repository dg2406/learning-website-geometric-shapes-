import React, {
    createContext,
    useState,
    useEffect,
  } from "react";
  
  export const AuthContext = createContext();
  
  export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const data = localStorage.getItem("user");
  
      if (data) {
        setUser(JSON.parse(data));
      }
    }, []);
  
    const login = (email, password) => {
      const users =
        JSON.parse(localStorage.getItem("users")) || [];
  
      const foundUser = users.find(
        (u) =>
          u.email === email &&
          u.password === password
      );
  
      if (foundUser) {
        localStorage.setItem(
          "user",
          JSON.stringify(foundUser)
        );
  
        setUser(foundUser);
  
        return true;
      }
  
      return false;
    };
  
    const register = (newUser) => {
      const users =
        JSON.parse(localStorage.getItem("users")) || [];
  
      const existingUser = users.find(
        (u) => u.email === newUser.email
      );
  
      if (existingUser) {
        return false;
      }
  
      users.push(newUser);
  
      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );
  
      localStorage.setItem(
        "user",
        JSON.stringify(newUser)
      );
  
      setUser(newUser);
  
      return true;
    };
  
    const logout = () => {
      localStorage.removeItem("user");
  
      setUser(null);
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          register,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }