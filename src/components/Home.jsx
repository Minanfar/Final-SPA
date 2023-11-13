import React, { useReducer, useState } from "react";
import weather from "../assets/clouds.jpg";
import news from "../assets/newspaper.jpg";
import greece from "../assets/greece.jpg";
import { Link } from "react-router-dom";
import "./css/home.css";
import LoginPage from "./LoginPage";

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <>
      <div className="home-main-box">
        <h1 className="home-title">
          ❝ Discover the <b>past</b> and stay informed about the <b>present</b>,
          and plan for the future with our comprehensive SPA.❞
          <p style={{ fontSize: "12px", marginTop: "15px", marginLeft: "80%" }}>
            your RM Team
          </p>
        </h1>
        {!showLoginPage ?(
          <LoginPage />
        ) : (
          <div className="home-img-container">
            <Link
              to="/weather"
              onMouseEnter={() => dispatch({ type: "HOVER", content: "weather" })}
              onMouseLeave={() => dispatch({ type: "RESET" })}
            >
              <img src={weather} alt="" className="home-img" />
              {state.weather.isHovered && (
                <p className="toggle-title">{state.weather.title}</p>
              )}
            </Link>
            <Link
              to="/news" // Updated path
              onMouseEnter={() => dispatch({ type: "HOVER", content: "news" })}
              onMouseLeave={() => dispatch({ type: "RESET" })}
            >
              <img src={news} alt="" className="home-img" />
              {state.news.isHovered && (
                <p className="toggle-title">{state.news.title}</p>
              )}
            </Link>
            <Link
              to="/history" // Updated path
              onMouseEnter={() => dispatch({ type: "HOVER", content: "history" })}
              onMouseLeave={() => dispatch({ type: "RESET" })}
            >
              <img src={greece} alt="" className="home-img" />
              {state.history.isHovered && (
                <p className="toggle-title">{state.history.title}</p>
              )}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
