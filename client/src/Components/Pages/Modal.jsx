import React, { useContext } from "react";
import { contextAPI } from "../MyContextApi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Modal = () => {
  const {
    addYourBill,
    closeAddBill,
    handleBillsChange,
    preventDefault,
    receiver,
    type,
    date,
    amount,
    addYourGoal,
  } = useContext(contextAPI);

  return (
    <div className="w-full">
      {addYourBill ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="flex justify-center w-full h-full bg-black/70 backdrop-blur-sm">
            <div className="bg-[#f7f1f1] mt-40 w-[50%] h-[50%] opacity-100 -z-40 flex justify-center items-center rounded-xl shadow-black/50 shadow-lg">
              <div
                className="absolute -mt-[30%] z-40 ml-[90%] cursor-pointer"
                onClick={closeAddBill}
              >
                <HiOutlineXMark className="text-2xl text-white hover:scale-150 transition duration-500 hover:text-[#7474e6]" />
              </div>
              {addYourBill ? (
                <form
                  onSubmit={preventDefault}
                  className="grid grid-cols-2 gap-x-10 gap-y-5 w-full mx-10 font-extralight"
                >
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs">Budget Receiver</label>
                    <input
                      type="text"
                      name="receiver"
                      placeholder="Shoprite"
                      onChange={handleBillsChange}
                      className=" px-2 rounded-md outline-none text-black/60 
                    shadow-black/20 shadow-sm py-3"
                      value={receiver}
                    />
                  </div>
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs">Budget Type</label>
                    <input
                      type="text"
                      name="type"
                      placeholder="Shopping / food / sport / gift"
                      onChange={handleBillsChange}
                      className="px-2 rounded-md outline-none text-black/60 shadow-black/20 shadow-sm py-3"
                      value={type}
                    />
                  </div>{" "}
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs">Budget Date</label>
                    <input
                      type="date"
                      name="date"
                      placeholder="5/4/2023"
                      onChange={handleBillsChange}
                      className="px-2 rounded-md outline-none text-black/60 shadow-black/20 shadow-sm py-3"
                      value={date}
                    />
                  </div>
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs"> Budget Amount</label>
                    <input
                      type="number"
                      name="amount"
                      placeholder="4,000"
                      onChange={handleBillsChange}
                      className="px-2 rounded-md outline-none text-black/60 
                    shadow-black/20 shadow-sm py-3"
                      value={amount}
                    />
                  </div>
                  <button className="w-3/4 bg-[#8686fd] flex justify-center ml-[75%] mt-5 py-2 rounded-lg text-white font-semibold hover:bg-[#6d6dfc] transition-all duration-300">
                    Add Bill
                  </button>
                </form>
              ) : (
                ""
              )}

              {/* {addYourGoal ? (
                <form className="bg-white py-10 px-20">
                  <h1>Your mama </h1>
                </form>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
