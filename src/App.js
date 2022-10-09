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
        // {
        //   path: "/home",
        //   element: <Home></Home>,
        // },
        {
          path: "/services",
          loader: async () => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/categories.php`
            );
          },
          element: <Services></Services>,
          children: [
            {
              path: "/services/:category_name",
              // loader: async ({ params }) => {
              //   console.log(params);
              // },
              element: <h1 className=" text-4xl text-center">hello</h1>,
            },
          ],
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
