import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./Notfound.jsx";
import Counter from "./Counter.jsx";
import Post from "./Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Notfound />,
  },
  {
    path: "/counter",
    element: <Counter />,
    errorElement: <Notfound />,
  },
  {
    path: "/post/:id",
    element: <Post />,
    errorElement: <Notfound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
