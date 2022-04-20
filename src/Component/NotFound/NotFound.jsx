import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div class=" flex items-center justify-center w-screen  h-[calc(100vh-3rem)] bg-gradient-to-r from-blue-400 to-[#00b8d2]">
        <div class="px-40 py-20 bg-white rounded-md shadow-xl">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-blue-500 text-9xl">404</h1>

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Page not found
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/home"
              class="px-6 py-2 text-sm font-semibold text-white bg-blue-400 hover:bg-blue-500 rounded ease-in-out duration-300 "
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
