import React from "react";
import "./App.css";
import Signin from "./loginpage/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./loginpage/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Login" element={<Signup />} />
      </Routes>
      ,
    </BrowserRouter>
  );
}

export default App;
