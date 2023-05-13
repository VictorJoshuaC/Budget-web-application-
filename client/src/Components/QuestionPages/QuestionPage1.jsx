import React from 'react'
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import earnImage from "../../assets/img/earn.png";
import { Link } from "react-router-dom";


export const QuestionPage1 = () => {
  return (
    <div className="h-full flex flex-col justify-between sm:flex-row sm:h-auto">
      <div className="sm:w-1/2">
        <h1 className="font-bold font-open-sans text-4xl leading-14 text-[#0077B5] pt-20 pl-16">
          Savvysaver
        </h1>
        <h2 className="font-semibold font-open-sans text-4xl leading-14 pt-16  pl-16">
          How do you earn a living?
        </h2>
        <div className="sm:pl-16 pl-16">
          <p className="sm:pt-16 flex">
            <GrCheckboxSelected className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Student</span>{" "}
          </p>
          <p className="pt-4 flex">
            <GrCheckbox className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Self employed</span>{" "}
          </p>
          <p className="pt-4 flex">
            <GrCheckboxSelected className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Employed</span>{" "}
          </p>
        </div>
        <Link to="/question2">
          <button className="ml-16 mt-16 bg-[#0077B5] py-3 px-12 rounded-md text-white text-2xl">
            Next
          </button>
        </Link>
      </div>

      <div className="sm:w-1/2  text-4xl leading-14 pt-28 sm:pl-16  flex justify-center">
        <img src={earnImage} className="w-[300px] sm:w-[512px]" alt="" />
      </div>
    </div>
  );
}
