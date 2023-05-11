import React, { useContext, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import { contextAPI } from "../MyContextApi";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Home = () => {
  const { addBill, cart, addGoal, amount } = useContext(contextAPI);
  console.log(cart);
  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + Number(item.amount),
    0
  );

  return (
    <div className={`w-full pt-[5%] overflow-hidden`}>
      <Modal />
      <div>
        <div className="flex justify-start w-full">
          <div className="pl-5">
            <h1 className="text-3xl pt-10  font-semibold">Overview</h1>
            <p className="font-normal">
              Get a quick grasp of your account and finances
            </p>
          </div>
        </div>

        <div className="w-full flex  justify-center gap-5 mt-10">
          <div className="w-[60%] shadow-black/20 shadow-lg rounded-2xl ">
            <div className="w-full flex justify-between h-full gap-2 ">
              <div className="flex flex-col w-3/5 mx-5">
                <div className="flex items-center justify-between pt-5 py-5">
                  <h2 className="font-normal text-3xl text-black/60">
                    Accounts
                  </h2>
                  <IoMdAddCircle className="text-3xl text-black/50" />
                </div>
                <div className="w-full flex flex-col text-lg font-semibold text-black/40 border-black/5 border shadow-black/20 shadow-lg  py-5 px-5 rounded-xl">
                  <div className="flex justify-between ">
                    <p>Andrew</p>
                    <div className="flex gap-2">
                      <p>
                        <AiOutlineEdit />
                      </p>
                      <p>
                        <Link to="/dashboard/settings">
                          <FiSettings />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <p className="w-full flex justify-center mt-5 text-xl">
                    Balance
                  </p>
                  <p className="w-full flex justify-center font-bold text-3xl text-[#3bca3b]">
                    ₦50,000
                  </p>
                </div>
                <div className="w-full ml-5 py-10">
                  <ProgressBar
                    completed={50}
                    bgColor="grey"
                    animateOnRender={true}
                    className="w-4/5 pl-10"
                  />
                </div>
                <div className="flex justify-between px-5 pb-5 ">
                  <p className="text-gray-400">Monthly budget limit</p>
                  <p className="text-black/70"> ₦50,000/₦100,000</p>
                </div>
              </div>
              <p className="border-r-2  border-black/30 rounded-full h-[80%]  mt-10"></p>
              <div className="w-[30%] flex justify-end text-end pr-10 mt-[8%]">
                <div>
                  <div className="mb-2">
                    <p className="text-[#5a5afc] font-semibold text-2xl">
                      ₦50,000
                    </p>
                    <p className="text-gray-400 text-sm">Current balance</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-[#3bca3b] text-lg font-semibold">
                      ₦100,000
                    </p>
                    <p className="text-gray-400 text-sm">Income</p>
                  </div>
                  <div className="mb-10">
                    <p className="text-[red] font-semibold text-lg">₦50,000</p>
                    <p className="text-gray-400 text-sm">Expenses</p>
                  </div>
                  <p className="font-semibold text-black/70">Deactivate</p>
                  <p className="text-gray-400">Account</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-full h-[40%] pt-5 px-5 shadow-black/20 shadow-lg  rounded-2xl">
              <h2 className="font-semibold text-xl text-black/60">
                Upcoming Bills
              </h2>
              <div className="w-full flex justify-center">
                <button
                  onClick={addBill}
                  className=" mt-7 bg-[blue] w-2/5 rounded-lg py-1 text-white flex justify-center items-center text-sm gap-1"
                >
                  Add Bill
                  <BsPlus className="text-lg text-white" />
                </button>
              </div>
            </div>
            <div className="w-full h-[40%] mt-[26%] px-5 shadow-black/20 shadow-lg rounded-2xl">
              <h2 className="font-semibold text-xl text-black/60 pt-5">
                Goals
              </h2>
              <div className="w-full flex justify-center">
                <button
                  onClick={addGoal}
                  className="mt-7 bg-[blue] w-2/5 rounded-lg py-1 text-white flex justify-center items-center text-sm gap-1"
                >
                  Add Goals
                  <BsPlus className="text-lg text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 mt-[7%] gap-5 flex justify-center" id="history">
          <div className="w-[60%] shadow-black/20 border border-black/5 shadow-lg ml-5 rounded-2xl">
            <h1 className="mt-5 pl-10 pb-3 text-xl font-semibold text-black/60">
              Recent Transaction History
            </h1>
            <div className="pb-7">
              <ul className="grid grid-cols-4 gap-10 text-center text-black/50 font-normal">
                <li>Receive</li>
                <li>Type</li>
                <li>Date</li>
                <li>Amount</li>
              </ul>
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <ul className="grid grid-cols-4 text-center gap-10 text-sm mt-3 text-black/50 font-semibold">
                      <li className="text-black">{item.receiver}</li>
                      <li className="font-normal">{item.type}</li>
                      <li className="font-normal">{item.date}</li>
                      <li className="text-black">₦{item.amount}</li>
                    </ul>
                  </div>
                );
              })}
              {cart.length <= 0 && (
                <h1 className="flex justify-center h-full mt-5  text-black/30 font-semibold">
                  History is empty
                </h1>
              )}
              {cart.length > 0 && (
                <div className="w-full flex gap-3 justify-center mt-10 items-center">
                  <p className="text-black/50">Total Budget Amount is: </p>
                  <p className="text-[blue] font-bold text-lg">
                    ₦{totalPrice.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-[27%]  border border-black/5 pl-2 pr-2 shadow-black/20 shadow-lg rounded-2xl">
            <h1 className="mt-5">Budget</h1>
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mt-4">
                    <div
                      className={`w-4/5 overflow-hidden h-2 bg-black/20 rounded-full`}
                    >
                      <div
                        style={{
                          width: `${item.amount.length <= 1000 && "50%"}`,
                          height: "100%",
                          backgroundColor: "red",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
