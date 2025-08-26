import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App.jsx é o elemento "pai" (layout)
    children: [
      {
        index: true, // A rota / vai renderizar o componente Home
        element: <Home />,
      },
      {
        path: "home", // Caminho: /home
        element: <Home />,
      },
      {
        path: "sobre", // O caminho agora é relativo ao pai: /sobre
        element: <Sobre />,
      },
      {
        path: "contato", // Caminho: /contato
        element: <Contato />,
      },
      {
        path: "login", // Caminho: /login
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
