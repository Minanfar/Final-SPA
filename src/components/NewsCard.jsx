import React, { useState, useEffect } from 'react';
import './css/NewsCard.css';

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '2e9f19b0185b42ce96f13b82ca4576cc';
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

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
          setError('Nachrichten konnten nicht abgerufen werden.');
        }
      } catch (error) {
        setError('Es gab ein Problem beim Abrufen der Nachrichten.');
      }
      setLoading(false);
    };

    fetchNews();
  }, [API_URL]);

  return (
    <div className="news-card">
      <h2>Today News</h2>
      {loading && <p>Load News...</p>}
      {error && <p>{error}</p>}
      <div className="news-container">
        {news.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Lesen Sie mehr
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
