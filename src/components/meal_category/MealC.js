import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function MealC() {
  const { categories } = useLoaderData();
  console.log(categories);

  return (
    <div className=" grid grid-cols-3 gap-5 w-[90%] mx-auto">
      {categories &&
        categories.map((cat, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5"
          >
            <Link to={`${cat.strCategory}`}>
              <img
                className="rounded-t-lg mx-auto p-5"
                src={cat.strCategoryThumb}
                alt=""
              />
              <h3 className=" text-3xl text-center">{cat.strCategory}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default MealC;
