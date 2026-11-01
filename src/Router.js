import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact";
import Comedy from "./components/Comedy";
import Music from "./components/Music";
import Dev from "./components/Dev";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  const [shows, setShows] = useState([]);
  const router = createBrowserRouter([
    {
      element: <Nav />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/comedy",
          element: <Comedy shows={shows} setShows={setShows} />,
        },
        // {
        //   path: "/music",
        //   element: <Music />,
        // },
        // {
        //   path: "/dev",
        //   element: <Dev />,
        // },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
