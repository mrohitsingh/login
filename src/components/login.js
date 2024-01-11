import React from "react";
import { CiUser } from "react-icons/ci";
import bg from "./bg.jpg";

const LoginForm = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full bg-gray-600 rounded-xl shadow-md bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-xs sm:max-w-sm mt-auto backdrop-opacity-10 backdrop-invert bg-white/15 rounded-xl shadow-md p-4 bg-cover bg-center bg-no-repeat border-2 border-gray-100 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-full">
          <CiUser className="text-6xl text-gray-600 p-4 font-semibold" />
        </div>
        <h2 className="text-2xl text-gray-100 font-semibold text-start mb-4">
          Welcome Back
        </h2>
        <form>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              placeholder="EMAIL ADDRESS"
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300"
            >
              Log In
            </button>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="mb-3">
              <input
                type="checkbox"
                id="rememberMe"
                className="text-indigo-500 border-gray-300 rounded-full focus:border-indigo-300 focus:ring-indigo-200 w-6"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium text-gray-100"
              >
                Remember Me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-gray-100 font-semibold hover:text-gray-300 hover:underline"
            >
              Forget Password
            </button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-xs sm:max-w-sm m-auto  rounded-xl shadow-md p-4 bg-cover bg-center bg-no-repeat text-center mt-10">
        <div className="">
          <button
            type="button"
            className="w-full py-2 text-white bg-transparent border-2 border-gray-100 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 backdrop-opacity-10 backdrop-invert bg-white/15"
          >
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
