import React from "react";
import "./css/rootelement.css";
import { Outlet, Link } from "react-router-dom";
import homeImg from "../assets/home.png";
import weatherImg from "../assets/weather.png";
import newsImg from "../assets/news.png";
import historyImg from "../assets/history.png";
import LoginPage from "./LoginPage";

function RootElement({username}) {
  return (
    <>
      <header>
        <nav className='navbar-menu'> 
        <h5>Welcome, {username}!</h5>
          <p className='main-date'>{new Date().toDateString()}</p>
         
          
          <Link to='/'>
            <img className='navbar-img' src={homeImg} alt='' />
          </Link>
          <Link to='/weather'>
            <img className='navbar-img' src={weatherImg} alt='' />
          </Link>
          <Link to='/news'>
            <img className='navbar-img' src={newsImg} alt='' />
          </Link>
          <Link to='/history'>
            <img className='navbar-img' src={historyImg} alt='' />
          </Link>
        </nav>
      </header>
      <main className='router-main'>
        <Outlet />
      </main>
    </>
  );
}

export default RootElement;
