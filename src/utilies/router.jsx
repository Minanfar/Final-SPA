import { createBrowserRouter } from "react-router-dom";
import RootElement from "../components/RootElement";
import News from "../components/News";
import Home from "../components/Home";
import History from "../components/History";
import NotFoundPage from "../components/NotFoundPage";
import Weather from "../components/Weather";

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
        element: <Weather />,
      },
      { path: "/news", element: <News /> },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
