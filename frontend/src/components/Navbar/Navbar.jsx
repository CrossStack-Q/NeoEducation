import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

function Navbar() {
  const userID = JSON.parse(localStorage.getItem("user"));
  console.log(userID?.email);
  return (
    <div >
      <div className="md:flex rounded-xl hidden flex-row justify-between bg-zinc-800 p-4 items-center">
        <Link to="/" className="">
          <span className="text-white">
            <span className="text-xl font-bold">Neo</span>
            <span className="text-lg">Eduaction</span>
          </span>
        </Link>

        <div className="flex space-x-6 text-white font-semibold items-center">
          <Link to="/" className="">
            <span>Home</span>
          </Link>
          <Link to="/about" className="">
            <span>About</span>
          </Link>
          <span to="/about" className="">
            <span>Find a Courses {`>`}</span>
          </span>

          <span to="/about" className="">
            <span>Country {`>`}</span>
          </span>
        </div>

        <div className="flex space-x-4 text-white">
          <Link to="/login" className="">
            <span>Login</span>
          </Link>
          <Link to="/signup" className="border-white border px-3 rounded-md">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
