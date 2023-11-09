import { createBrowserRouter } from "react-router-dom";
import RootElement from "../components/RootElement";
import NewsCard from "../components/NewsCard";
import Home from "../components/Home";
import History from "../components/History";
import NotFoundPage from "../components/NotFoundPage";
import WeatherDisplay from "../components/WeatherDisplay";

export const router = createBrowserRouter([
  {
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/weather",
        element: <WeatherDisplay />,
      },
      { path: "/news", element: <NewsCard /> },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
