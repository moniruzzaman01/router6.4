import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <Link
        className=" absolute top-5 left-5 text-blue-600 capitalize underline"
        to={"/"}
      >
        back to home
      </Link>
      <div className=" text-center h-screen flex justify-center items-center">
        <h1 className=" text-4xl">Ops! 404 not found. </h1>
      </div>
    </>
  );
}

export default Error;
