// import React from "react";

// function Inputs() {
//   return (
//     <div>
//       <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-indigo-900 shadow border border-pink-900 hover: rounded border-radius: 1rem text-white " />
//     </div>
//   );
// }

// export default Inputs;

// import React from "react";

const Inputs = ({ placeholder, className, type, ...rest }) => {
  return (
    <input
      type={type ? type : "text"}
      className={`input-text ${className} px-3 py-4  text-base  text-white  w-full bg-[#141530] 
        rounded-md outline-none`}
      required
      {...rest}
      placeholder={placeholder}
    />
  );
};

export default Inputs;
