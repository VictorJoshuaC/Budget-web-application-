import React, { useState, useContext } from "react";
import { contextAPI } from "../MyContextApi";
import { Link } from "react-router-dom";
export const Login = () => {
  //   const { userName, password } = state;
  const {
    errorMsg,
    handleInput2,
    handleSubmit2,
    success,
    // password2,
    // email2,
    // password,
    // email,
    state,
    state2,
  } = useContext(contextAPI);
  const [revealPassword, setRevealPassword] = useState(false);

  const showPassword = () => {
    setRevealPassword((prev) => !prev);
  };
  return (
    <div className="w-full">
      <h2 className="font-bold pt-40 text-[#6666d3] text-3xl flex justify-center">
        SavvySaver
      </h2>
      <div className="flex justify-center my-3">
        <div className="flex justify-center items-center gap-3 w-2/5 bg-[#6666d3] py-2 rounded-lg">
          <p className="flex gap-3 items-center text-white text-lg font-normal ">
            Login to your account
          </p>
        </div>
      </div>{" "}
      <div className="flex justify-center w-full">
        <form
          className="flex flex-col gap-5 text-black w-2/5"
          onSubmit={handleSubmit2}
        >
          <input
            type="email"
            placeholder="Email Address"
            name="email2"
            onChange={handleInput2}
            className="border border-black/20  py-3 rounded-md px-2 outline-none"
          />
          <div className="border flex border-black/20 py-3 rounded-md pl-2 outline-none">
            <input
              type={revealPassword ? "text" : "password"}
              placeholder="Password"
              name="password2"
              onChange={handleInput2}
              className="w-4/5 outline-none"
            />
            <p
              className="pl-[10%] text-black/60 cursor-pointer"
              onClick={showPassword}
            >
              Show
            </p>
          </div>
          {state2.password2 &&
          state2.email2 &&
          state2.password2 === state.password &&
          state2.email2 === state.email ? (
            <Link
              to="/dashboard"
              className="border w-full border-[#6666d3] font-bold text-xl text-[#6666d3] py-3 rounded-md px-5 outline-none"
            >
              {" "}
              <button type="submit" className="w-full flex justify-center">
                Submit
              </button>
            </Link>
          ) : (
            <button
              type="submit"
              className="border border-[#6666d3] font-bold text-xl text-[#6666d3] py-3 rounded-md px-5 outline-none"
            >
              Submit
            </button>
          )}
        </form>
      </div>
      <p className="text-[red] flex justify-center pt-3">{errorMsg}</p>
      <p className="text-[green] flex justify-center pt-3">{success}</p>
    </div>
  );
};
