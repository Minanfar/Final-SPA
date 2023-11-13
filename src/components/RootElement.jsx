import React,{useContext} from "react";
import "./css/rootelement.css";
import { Outlet, Link } from "react-router-dom";
import homeImg from "../assets/home.png";
import weatherImg from "../assets/weather.png";
import newsImg from "../assets/news.png";
import historyImg from "../assets/history.png";
import { UserContext } from "./context/UseContext";


function RootElement() {
  const {username}=useContext(UserContext)
  return (
    <>
      <header>
        <nav className='navbar-menu'> 
    
        <h5 className='navbar-username'>Welcome {username}!</h5>
         
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
          
          <p className='main-date'>Today: {new Date().toDateString()}</p>
         
        </nav>
      </header>
      <main className='router-main'>
        <Outlet />
      </main>
    </>
  );
}

export default RootElement;
