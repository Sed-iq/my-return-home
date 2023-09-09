// Splash screens
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LOGO from "./../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
export default () => {
  const [splash, setSplash] = useState(1);
  switch (splash) {
    case 1:
      return <First setSplash={setSplash} />;
    case 2:
      return <Second setSplash={setSplash} />;
    case 3:
      return <Third setSplash={setSplash} />;
    default:
      break;
  }
};
function Second({ setSplash }) {
  return (
    <div className="sm:hidden block h-full">
      <div className="flex flex-col h-full justify-between ">
        <div className="h-[70%] w-full bg-gray-300 rounded-b-2xl p-2">
          <div className="w-full flex p-2 justify-between">
            {/* Logo */}
            <div>
              <button
                onClick={() => setSplash((prev) => prev - 1)}
                className="text-white bg-[#f6933e] font-bold p-3 rounded-xl"
              >
                {" "}
                <FaArrowLeft />
              </button>
            </div>
            <img alt="" srcSet={LOGO} className="w-[20%]" />
          </div>
        </div>
        <div className="h-[30%] w-full p-2">
          <div className="mt-4 mx-3">
            <p className="text-2xl opensans-b font-extrabold">
              Financial <br /> Services
            </p>
            <p className="mt-3 text-sm w-[80%] font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              velit repellendus tempora non!
            </p>
            <div className="mt-3">
              <button
                onClick={() => setSplash((prev) => prev + 1)}
                className="bg-[#f6933e] text-white focus:outline-none text-sm font-bold rounded-full flex items-center justify-between py-3 px-4"
              >
                Next <FaArrowRight className="mx-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Third({ setSplash }) {
  return (
    <div className="sm:hidden block h-full">
      <div className="flex flex-col h-full justify-between ">
        <div className="h-[70%] w-full bg-gray-300 rounded-b-2xl p-2">
          <div className="w-full flex p-2 justify-between">
            {/* Logo */}
            <div>
              <button
                onClick={() => setSplash((prev) => prev - 1)}
                className="text-white bg-[#f6933e] font-bold p-3 rounded-xl"
              >
                {" "}
                <FaArrowLeft />
              </button>
            </div>
            <img alt="" srcSet={LOGO} className="w-[20%]" />
          </div>
        </div>
        <div className="h-[30%] w-full p-2">
          <div className="mt-4 mx-3">
            <p className="text-2xl opensans-b font-extrabold">
              Social <br /> groups
            </p>
            <p className="mt-3 text-sm w-[80%] font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              neque.
            </p>
            <div className="mt-3">
              <Link to={"/home"}>
                <button className="bg-[#f6933e] text-white focus:outline-none text-sm font-bold rounded-full flex items-center justify-between py-3 px-4">
                  Let's Go! <FaArrowRight className="mx-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function First({ setSplash }) {
  return (
    <div className="sm:hidden block h-full">
      <div className="flex flex-col h-full justify-between ">
        <div className="h-[70%] w-full bg-gray-300 rounded-b-2xl p-2">
          <Link className="w-full flex p-2 justify-end">
            {/* Logo */}
            <img alt="" srcSet={LOGO} className="w-[20%]" />
          </Link>
        </div>
        <div className="h-[30%] w-full p-2">
          <div className="mt-4 mx-3">
            <p className="text-2xl opensans-b  font-extrabold">
              Relocation
              <br /> Coaching
            </p>
            <p className="mt-3 text-sm w-[80%] font-semibold text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, eligendi.
            </p>
            <div className="mt-3">
              <button
                onClick={() => setSplash(2)}
                className="bg-[#f6933e] text-white focus:outline-none text-sm font-bold rounded-full flex items-center justify-between py-3 px-4"
              >
                Next <FaArrowRight className="mx-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
