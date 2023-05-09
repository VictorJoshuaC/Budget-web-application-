import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import spendingImage from "../../assets/img/spending.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProgressBar({ progress }) {
  return (
    <div style={{ width: "20%", height: "10px", backgroundColor: "#ddd" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "10px",
          backgroundColor: "#0077B5",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}
const QuestionPage3 = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [progress, setProgress] = useState(100); // assuming 2 pages

  function updateProgress() {
    const percentage = ((currentPage - 1) / 2) * 100; // assuming 2 pages
    setProgress(percentage);
  }
  return (
    <div className="h-full flex flex-col justify-between sm:flex-row sm:h-auto">
      <div className="sm:w-1/2">
        <h1 className="font-bold font-open-sans text-4xl leading-14 text-[#0077B5] pt-20 pl-16">
          Savvysaver
        </h1>
        <div className="mt-[50px] mx-16">
          <p className="px-8 pb-2">3 of 3</p>
          <ProgressBar progress={progress} />
        </div>
        <h2 className="font-semibold font-open-sans text-4xl leading-14 pt-6  pl-16">
          What are you major spending?
        </h2>
        <div className="sm:pl-16 pl-16">
          <p className="sm:pt-8 flex">
            <GrCheckboxSelected className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Rent</span>
          </p>
          <p className="pt-4 flex">
            <GrCheckbox className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Transport</span>
          </p>
          <p className="pt-4 flex">
            <GrCheckboxSelected className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Tuition</span>{" "}
          </p>
          <p className="pt-4 flex">
            <GrCheckbox className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Feeding</span>
          </p>
          <p className="pt-4 flex">
            <GrCheckbox className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">clothing</span>
          </p>
        </div>
        <Link to="/dashboard">
          <button className="ml-16 mt-10 bg-[#0077B5] py-3 px-12 rounded-md text-white text-2xl">
            Get started
          </button>
        </Link>
      </div>

      <div className="sm:w-1/2  text-4xl leading-14 pt-28 sm:pl-16  flex justify-center">
        <img
          src={spendingImage}
          className="w-[300px] sm:w-[412px] h-[450px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default QuestionPage3;
