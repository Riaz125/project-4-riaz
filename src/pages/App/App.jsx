import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Feed from "../Feed/Feed";
import userService from "../../utils/userService";
import ImdbPage from "../ImdbPage/ImdbPage";

function App() {
  
  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // < decoding the token from localstorage and setting the user object in state
    
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  // {user ? <Routes>With feed and profifle</Routes : <Routes login signup> </Routes}
  console.log(user, ' this user')
  if(user) {
    return (
    <Routes>
      <Route
        path="/"
        element={<Feed user={user} handleLogout={handleLogout} />}
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/imdb"
        element={<ImdbPage />}
      />
    </Routes>
    )
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />      
      <Route
        path="/imdb"
        element={<ImdbPage />}
      />

    </Routes>
  );
}

export default App;