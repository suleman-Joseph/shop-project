import React from "react";
// import { ImSpinner9 } from "react-icons/im";

const Button = ({
  children,
  className,
  type,
  disabled,
  isLoading,

}) => {
  return (
    <div>
      <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-pink-600 hover:bg-pink-900 border-3 border-indigo-900 shadow rounded transition duration-200 border-radius: 9999px">
        Sign in
      </button>
    </div>
  );
};

export default Button;
