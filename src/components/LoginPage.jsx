import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import Home from "./Home";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = ({username}) => {
    if (username !== "" && password !== "") {
      setLoggedIn(true);
    setLoggedIn(true)
   
    }
    const navigate = useNavigate();

    // Redirect to home page if logged in
    if (loggedIn) {
      navigate("/");
      return null; // Render nothing if already logged in
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className='login-heading'>Sign In</div>
          <div>
            <form className='login-form'>
              <input
                className='login-input'
                placeholder='Usename'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                className='login-input'
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
              onClick={handleLogin}
                className='login-button'
                type='submit'
                value='Sign In'
              ></input>
            </form>
          </div>
     
      </div>
    </>
  );
};

export default LoginPage;
