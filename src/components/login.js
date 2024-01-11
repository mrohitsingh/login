import React from "react";
import { CiUser } from "react-icons/ci";
import bg from "./bg.jpg";

const LoginForm = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col justify-center items-center w-1/2 p-10">
        <div className="w-1/2  mt-auto p-4 backdrop-blur-sm bg-white/20 rounded-md shadow-md bg-cover bg-center bg-no-repeat border border-gray-100 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full">
            <CiUser className="text-6xl text-gray-600 p-4 font-semibold" />
          </div>
          <h2 className="text-2xl text-gray-100 font-normal text-start mb-4 px-4 pt-8 pb-4">
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
                className="w-full py-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-1 focus:ring-indigo-300"
              >
                Log In
              </button>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center justify-between pr-2">
                <input type="checkbox" id="rememberMe" className="check pr-2" />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium text-gray-100"
                >
                  Remember Me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-gray-100 font-semibold hover:text-gray-500 hover:underline"
              >
                Forget Password
              </button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm m-auto  rounded-xl text-center mt-10">
          <button
            type="button"
            className="w-1/2 py-2 text-white bg-transparent border border-gray-100 rounded-lg hover:bg-blue-600 hover:border-0 backdrop-opacity-10 backdrop-invert bg-white/5"
          >
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
