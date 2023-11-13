import React, { createContext, useState,useContext } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [username, setUser] = useState();
  const [showLoginPage, setShowLoginPage] = useState(false);
  
const login= (username,password)=>{
    setUser(username,password)
}

  const logout = () => {
    setUser();
  };

  return (
    <UserContext.Provider value={{ username, setUser, login, logout , setShowLoginPage}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

  