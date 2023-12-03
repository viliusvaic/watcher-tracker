import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import RootRoute from "./RootRoute";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Dashboard";
import ShowsList from "./ShowsList";
import History from "./History";
import Statistics from "./Statistics";
import { css, Global } from "@emotion/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tv-shows",
        element: <ShowsList />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin-left: 230px;
        }
      `}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
