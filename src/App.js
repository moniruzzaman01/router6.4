import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Meals from "./components/meals/Meals";
import MealD from "./components/meal_details/MealD";
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
          path: "services",
          loader: async () => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/categories.php`
            );
          },
          element: <Services></Services>,
          children: [
            {
              path: ":category_name",
              loader: async ({ params }) => {
                return fetch(
                  `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.category_name}`
                );
              },
              element: <Meals></Meals>,
            },
            {
              path: ":category_name/:meal_id",
              loader: async ({ params }) =>
                fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal_id}`
                ),
              element: <MealD></MealD>,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
        {
          path: "about",
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
