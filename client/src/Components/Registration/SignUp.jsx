import React, { useContext, useState } from "react";
import { contextAPI } from "../MyContextApi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const { state, handleInput, handleSubmit, errorMsg } = useContext(contextAPI);
  const [revealPassword, setRevealPassword] = useState(false);

  const showPassword = () => {
    setRevealPassword((prev) => !prev);
  };
  return (
    <div className="w-full">
      <h2 className="font-bold pt-20 text-[#6666d3] text-3xl flex justify-center">
        SavvySaver
      </h2>
      <div className="flex justify-center my-3">
        <div className="flex justify-center items-center gap-3 w-2/5 bg-[#6666d3] py-2 rounded-lg">
          <button className="flex gap-3 items-center text-white text-lg font-bold ">
            <FcGoogle className="text-lg" />
            Sign up with google
          </button>
        </div>
      </div>
      <p className="flex justify-center text-xl text-black/60 py-4">Or</p>
      <div className="flex justify-center w-full">
        <form
          className="flex flex-col gap-5 text-black w-2/5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInput}
            className="border border-black/20  py-3 rounded-md px-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleInput}
            className="border border-black/20  py-3 rounded-md px-2 outline-none"
          />
          <div className="border flex border-black/20 py-3 rounded-md pl-2 outline-none">
            <input
              type={revealPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleInput}
              className="w-4/5 outline-none"
            />
            <p
              className="pl-[10%] text-black/60 cursor-pointer"
              onClick={showPassword}
            >
              Show
            </p>
          </div>
          {state.username && state.email && state.password ? (
            <button
              type="submit border"
              className="border border-[#6666d3] font-bold text-xl text-[#6666d3] py-3 rounded-md px-5 outline-none"
            >
              <Link to="/login">Submit </Link>
            </button>
          ) : (
            <button
              type="submit border"
              className="border border-[#6666d3] font-bold text-xl text-[#6666d3] py-3 rounded-md px-5 outline-none"
            >
              Submit
            </button>
          )}
        </form>
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-2/5 flex gap-2">
          <p>Already have an account? </p>
          <Link to="/login">
            {" "}
            <button className="text-[blue]">Login</button>
          </Link>
        </div>
      </div>
      <p className="flex justify-center text-[red] pt-4">{errorMsg}</p>
    </div>
  );
};
