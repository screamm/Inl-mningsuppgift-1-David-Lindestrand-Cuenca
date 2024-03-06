import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Favorites } from "./pages/Favorites";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
          },
        ]);


