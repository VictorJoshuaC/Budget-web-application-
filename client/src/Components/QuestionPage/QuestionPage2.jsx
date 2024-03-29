import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import oftenImage from "../../assets/img/often.png";
import { Link } from "react-router-dom";

const QuestionPage2 = () => {
  return (
    <div className="h-full flex flex-col justify-between sm:flex-row sm:h-auto">
      <div className="sm:w-1/2">
        <h1 className="font-bold font-open-sans text-4xl leading-14 text-[#0077B5] pt-20 pl-16">
          Savvysaver
        </h1>
        <h2 className="font-semibold font-open-sans text-4xl leading-14 pt-16  pl-16">
          How often do you earn?
        </h2>
        <div className="sm:pl-16 pl-16">
          <p className="sm:pt-16 flex">
            <GrCheckboxSelected className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Daily</span>{" "}
          </p>
          <p className="pt-4 flex">
            <GrCheckbox className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">weekly</span>{" "}
          </p>
          <p className="pt-4 flex">
            <GrCheckboxSelected className="mt-[0.5rem]" />
            <span className="ml-4 text-lg sm:text-xl">Monthly</span>{" "}
          </p>
        </div>
        <Link to="/spending">
          <button className="ml-16 mt-16 bg-[#0077B5] py-3 px-12 rounded-md text-white text-2xl">
            Next
          </button>
        </Link>
      </div>

      <div className="sm:w-1/2  text-4xl leading-14 pt-28 sm:pl-16  flex justify-center">
        <img src={oftenImage} className="w-[300px] sm:w-[812px]" alt="" />
      </div>
    </div>
  );
};

export default QuestionPage2;
