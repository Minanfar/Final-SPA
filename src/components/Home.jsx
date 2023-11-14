import React, { useContext, useReducer, useState, useEffect } from "react";
import weather from "../assets/clouds.jpg";
import news from "../assets/newspaper.jpg";
import greece from "../assets/greece.jpg";
import { Link } from "react-router-dom";
import "./css/home.css";
import LoginPage from "./LoginPage";
import { UserContext } from "./context/UseContext";

const initialState = {
  weather: { isHovered: false, title: "Weather" },
  news: { isHovered: false, title: "News" },
  history: { isHovered: false, title: "History Events" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HOVER":
      return {
        ...state,
        [action.content]: { ...state[action.content], isHovered: true },
      };
    case "RESET":
      return {
        ...state,
        weather: { ...state.weather, isHovered: false },
        news: { ...state.news, isHovered: false },
        history: { ...state.history, isHovered: false },
      };
    default:
      return state;
  }
};

function Home() {
  const { setShowLoginPage, isLoggedIn,setLoggedIn, username } = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    // Check if the user is logged in
    if (username) {
      setLoggedIn(true);
    } else {
      setShowLoginPage(true);
      setLoggedIn(false);
    }
  }, [username, setShowLoginPage]);

  return (
    <>
      <div className='home-main-box'>
        
        {isLoggedIn ? (
          <div>
            <h1 className='home-title'>
              ❝ Discover the <b>past</b> and stay informed about the <b>present</b>, and plan for the future with our comprehensive
              SPA.❞
            </h1>
            <div className='home-img-container'>
              <Link
                to='/weather'
                onMouseEnter={() =>
                  dispatch({ type: "HOVER", content: "weather" })
                }
                onMouseLeave={() => dispatch({ type: "RESET" })}
              >
                <img src={weather} alt='' className='home-img' />
                {state.weather.isHovered && (
                  <p className='toggle-title'>{state.weather.title}</p>
                )}
              </Link>
              <Link
                to='/news' // Updated path
                onMouseEnter={() =>
                  dispatch({ type: "HOVER", content: "news" })
                }
                onMouseLeave={() => dispatch({ type: "RESET" })}
              >
                <img src={news} alt='' className='home-img' />
                {state.news.isHovered && (
                  <p className='toggle-title'>{state.news.title}</p>
                )}
              </Link>
              <Link
                to='/history' // Updated path
                onMouseEnter={() =>
                  dispatch({ type: "HOVER", content: "history" })
                }
                onMouseLeave={() => dispatch({ type: "RESET" })}
              >
                <img src={greece} alt='' className='home-img' />
                {state.history.isHovered && (
                  <p className='toggle-title'>{state.history.title}</p>
                )}
              </Link>
            </div>
          </div>
        ) :
          <LoginPage />
       }
      </div>
    </>
  );
}

export default Home;
