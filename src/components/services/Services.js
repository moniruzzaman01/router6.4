import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MealC from "../meal_category/MealC";

function Services() {
  const { categories } = useLoaderData();

  return (
    <>
      <div className=" grid grid-cols-3 gap-5 w-[90%] mx-auto">
        {categories &&
          categories.map((cat, index) => (
            <MealC key={index} category={cat}></MealC>
          ))}
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
}

export default Services;
