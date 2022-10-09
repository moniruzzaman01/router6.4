import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Meals() {
  const { meals } = useLoaderData();

  return (
    <>
      {meals ? (
        <div className=" grid grid-cols-3 gap-5 w-[90%] mx-auto">
          {meals &&
            meals.map((meal, index) =>
              meal ? (
                <div
                  key={index}
                  className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link to={`${meal.idMeal}`}>
                    <img
                      className="rounded-t-lg mx-auto p-5"
                      src={meal.strMealThumb}
                      alt=""
                    />
                  </Link>
                </div>
              ) : (
                <h1 className=" text-4xl text-black z-20">No data found!!!</h1>
              )
            )}
        </div>
      ) : (
        <h1 className=" text-4xl text-center lg:mt-20">No data found!!!</h1>
      )}
    </>
  );
}

export default Meals;
