import React, { useState, useEffect,useContext } from "react";
import "./css/NewsCard.css";
import { UserContext } from "./context/UseContext";
import LoginPage from "./LoginPage";

const NewsCard = () => {
  const { setShowLoginPage, isLoggedIn, setLoggedIn, username } =
    useContext(UserContext);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//  const API_KEY = "2e9f19b0185b42ce96f13b82ca4576cc";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2e9f19b0185b42ce96f13b82ca4576cc`;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setNews(data.articles);
        } else {
          setError("Nachrichten konnten nicht abgerufen werden.");
        }
      } catch (error) {
        setError("Es gab ein Problem beim Abrufen der Nachrichten.");
      }
      setLoading(false);
    };

    fetchNews();
  }, [API_URL]);
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
      <div>
        {isLoggedIn ? (
          <>
            <h1 className='news-title'>𝒫𝓇𝑒𝓈𝓈 𝒯𝑜𝒹𝒶𝓎</h1>
            {loading && (
              <p>
                <i>loading news...</i>
              </p>
            )}

            {error && <p>{error}</p>}
            <div className='news-container'>
              {news.map((article, index) => (
                <div className='article' key={index}>
                  <img src={article.urlToImage} alt={article.title} />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a
                    href={article.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Read more ...
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
};

export default NewsCard;
