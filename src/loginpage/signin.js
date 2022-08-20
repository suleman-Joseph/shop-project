import React from "react";
import Inputs from "./inputs";
import { Link } from "react-router-dom";
import Button from "./button/button";
function Signin() {
  return (
    <div>
      <div className="py-26 bg-blue-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Sign in
              </h2>
            </div>
            <>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold">Email</label>
                <Inputs type="Email" placeholder="Email" />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold">Password</label>
                <Inputs type="Password" placeholder="Password" />
              </div>
              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <label>
                    <input type="checkbox" />
                    <span className="ml-1 font-extrabold">Remember me</span>
                  </label>
                </div>
                <div className="w-full lg:w-auto px-4">
                  <a className="inline-block font-extrabold hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <Button />
              {/* <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-pink-600 hover:bg-pink-900 border-3 border-indigo-900 shadow rounded transition duration-200 border-radius: 9999px">
                Sign in
              </button> */}
              <Link to="/Login">
                <p className="text-center font-extrabold text-white">
                  Dont have an account?
                  <a className="text-red-500 hover:underline">Sign up</a>
                </p>
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
