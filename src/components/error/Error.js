import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  //   const error = useRouteError();
  //   console.error(error);

  return (
    <>
      <Link
        className=" absolute top-5 left-5 text-blue-600 capitalize underline"
        to={"/"}
      >
        back to home
      </Link>
      <div className=" text-center min-h-screen flex justify-center items-center">
        <div>
          <h1 className=" text-4xl">Oops!</h1>
          <p>Sorry, an unexpected error has occured!</p>
        </div>
      </div>
    </>
  );
}

export default Error;
