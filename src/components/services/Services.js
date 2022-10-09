import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import MealC from "../meal_category/MealC";

function Services() {
  const { categories } = useLoaderData();

  return (
    <>
      <div className=" flex justify-center gap-5 text-blue-600 underline">
        {categories &&
          categories.map((cat, index) => (
            <Link to={`${cat.strCategory}`} key={index}>
              {cat.strCategory}
            </Link>
            // <MealC key={index} category={cat}></MealC>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Services;
