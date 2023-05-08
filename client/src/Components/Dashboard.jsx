import React, { useContext } from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotificationsOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { contextAPI } from "./MyContextApi";

export const Dashboard = () => {
  const { userName } = useContext(contextAPI);
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5 fixed w-full text-white bg-[#6666d3]">
        <h1 className="font-bold text-2xl">SavvySaver</h1>
        <form className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-2/5 rounded-xl pl-4 py-1 outline-none text-black/60"
          />
          <button className="ml-[-3%] text-black">
            <CiSearch />
          </button>
        </form>
        <ul className="flex gap-3 text-lg">
          <li>
            <AiFillMessage />
          </li>
          <li>
            <IoMdNotificationsOff />
          </li>
          <li>
            <FaUserCircle />
          </li>
          <li className="text-white text-xs">{userName}</li>
        </ul>
      </div>
    </div>
  );
};
