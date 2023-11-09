import React from "react";
import "./css/rootelement.css";
import { Outlet, Link } from "react-router-dom";
import homeImg from "../assets/home.png";
import weatherImg from "../assets/weather.png";
import newsImg from "../assets/news.png";
import historyImg from "../assets/history.png";

function RootElement() {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>
            <img className='img' src={homeImg} alt='' />
          </Link>
          <Link to='/weather'>
            <img className='img' src={weatherImg} alt='' />
          </Link>
          <Link to='/news'>
            <img className='img' src={newsImg} alt='' />
          </Link>
          <Link to='/history'>
            <img className='img' src={historyImg} alt='' />
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootElement;
