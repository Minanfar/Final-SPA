import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "./context/UseContext";
import { useNavigate } from "react-router-dom";

import "./css/login.css";

function LoginPage() {
  const { user, login, setShowLoginPage } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5 || password === "") {
      alert("Password must be between 5 characters.");
      return setPassword("");
    }
    setShowLoginPage(true);
    login(username, password);
    navigate("/");
    setUsername("");
    setPassword(""); 
    console.log(user);
  };

  return (
    <>
    <section className="login-main-page">
    <h3 className="signin-error" >To access the page, please Sign in first</h3> 
      <section className='login-container'>
        <div className='login-heading'>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} className='login-form'>
            <div>
              <input
                className='login-input'
                placeholder='Username'
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className='login-input'
                placeholder='Password'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className='login-button' type='submit'>
              sign in
            </button>
          </form>
        </div>
      </section>
      </section>
    </>
  );
}

export default LoginPage;
