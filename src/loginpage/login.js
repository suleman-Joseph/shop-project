import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function Login() {
  const [inputkey, setInput] = useState({});

  const handleChange = () => {
    console.log(inputkey);
    axios
      .post("http://localhost:4000/createBrand", { inputkey })
      .then((res) => console.log(res.data))
      .then((error) => console.log(error));
  };

  return (
    <div>
      <div className="antialiased bg-slate-200">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt=""
              />
              <span>Login with Google</span>
            </button>
          </div>
          <div className="my-10">
            <div className="flex flex-col space-y-5">
              <div>
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  type="email"
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </div>

              <div className="flex flex-row justify-between"></div>
              <button
                onClick={handleChange}
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <span>Login</span>
              </button>
              <p className="text-center">
                Not registered yet?
                <h2 className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                  <span>
                    <Link to="/pass">Register now </Link>
                  </span>
                </h2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
