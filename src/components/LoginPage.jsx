import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "./context/UseContext";

import "./css/login.css";

function LoginPage() {
  const { user, login, setShowLoginPage } = useContext(UserContext);
  const [username, setUsername] = useState("mina");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoginPage(true);

    login(username, password);
    console.log(user);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <section className='login-container'>
      <div className='login-heading'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <div>
            <input
            className="login-input"
            placeholder="Username"
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
            className="login-input"
            placeholder="Password"
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
    </>
  );
}

export default LoginPage;
