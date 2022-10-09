import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
