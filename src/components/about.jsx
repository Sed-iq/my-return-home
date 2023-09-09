import { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineMenu,
  AiOutlineTag,
} from "react-icons/ai";
import { MdChecklistRtl, MdLocationPin } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

// About page
export default () => {
  const [card, setCard] = useState(1);
  return (
    <div>
      <div className="flex top-0 sticky bg-white z-10 justify-between items-center px-3 py-4">
        <Link to={"/home"}>
          <button className="p-3 rounded-md bg-[#f8a965]">
            <FaArrowLeft className="text-white" />
          </button>
        </Link>
        <div>
          <p className="text-xl roboto font-bold">About us</p>
        </div>
        <div>
          <AiOutlineMenu className="text-xl" />
        </div>
      </div>
      <div className="flex justify-center p-3">
        <div
          style={{ boxShadow: "5px 5px 2.6px #f8a964" }}
          className="w-[90%] rounded-xl bg-[#979797] h-[200px]"
        />
      </div>
      <div className="mt-8 flex flex-col items-center">
        <Regular title={"What do we offer?"} />
        <Regular title={"Why choose us?"} />
        <Regular title={"What do we offer?"} />
      </div>
      <div className="my-2 flex flex-col items-center p-3">
        <div className="flex px-6 w-full justify-between">
          <p className="roboto">Upcoming Webinars</p>
          <div className="flex items-center">
            <FaArrowLeft
              onClick={() => switchCards("backword")}
              className={` ${
                card == 1 ? "text-gray-400" : "text-[#f6a963]"
              } mr-2`}
            />
            <FaArrowRight
              onClick={() => switchCards("forward")}
              className={`${
                card == 1 ? "text-[#f6a963]" : "text-gray-400"
              }  ml-2`}
            />
          </div>
        </div>
        <Switcher />
        <div className="mt-10 px-3 w-full">
          <p className="text-lg roboto">Upcoming Events</p>
          <div className=" flex overflow-x-auto overflow-y-hidden min-w-full px-7 py-8">
            <div className="flex space-x-3">
              <GrayCard />
              <GrayCard />
              <GrayCard />
            </div>
          </div>
        </div>
        <div className="mt-10 py-10 flex flex-col items-center  w-full rounded-xl bg-[#fff6ed]">
          <Testimonials name={"Ed Sheeran"} affilliation={"Artist"} />
          <Testimonials name={"Ellie Goulding"} affilliation={"Artist"} />
          <Testimonials name={"Elon Musk"} affilliation={"CEO"} />
        </div>
        <div className="mt-7 pb-8 w-full flex justify-center">
          <div className="w-[90%] h-[300px] pt-5 flex flex-col items-center rounded-xl border-2 border-[#f6933e] bg-[#fff5ec]">
            <div className="bg-[#f3a057] flex justify-center items-center  w-[100px] h-[100px] text-white rounded-full">
              <MdChecklistRtl className="text-5xl" />
            </div>
            <div className="mt-5">
              <p className="text-[22px] roboto text-center">
                Book an <br /> appointment?
              </p>
            </div>
            <div className="mt-5 px-1 w-full">
              <button className="text-white hover:text-blue-600 hover:border-[#f6933e] hover:bg-transparent border-2 border-transparent rounded font-bold w-full p-3 bg-[#f3a057] ">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function switchCards(action) {
    if (action == "forward" && card < 2) {
      setCard(2);
    } else if (action == "backword" && card > 1) {
      setCard(1);
    }
  }
  function Switcher() {
    switch (card) {
      case 1:
        return <Card />;
      case 2:
        return <SecondCard />;
      default:
        break;
    }
  }
};
function Testimonials({ name, affilliation }) {
  return (
    <div className="p-6 w-[90%] mb-10 bg-white rounded-2xl ">
      <div className="flex items-center">
        <FaCircle className="text-5xl text-[#f6933e]" />
        <div className="flex flex-col mx-4">
          <p className="text-lg roboto ">{name}</p>
          <p className="text-xs text-gray-500 roboto ">{affilliation}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm  text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam
          alias accusamus est doloremque odio quaerat id sed natus molestias
          commodi doloribus error eos, et expedita porro, facilis saepe? Sit
          architecto alias magnam cum perferendis totam, ullam quia quasi
          dolores?
        </p>
      </div>
    </div>
  );
}
function GrayCard() {
  // gray cards
  return (
    <div
      style={{ background: "linear-gradient(#d9d9d9,#696969)" }}
      className="w-[270px] h-[300px] flex items-end rounded-2xl"
    >
      <div className="w-full py-6 px-5">
        <div
          className="w-[88px] h-[40px] border-2 border-white 
        text-white rounded-full flex items-center justify-evenly px-3 bg-[#f6933e]"
        >
          <MdLocationPin />
          <p className="text-xs font-bold">Kenya</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold text-white">Aurora Music Festival</p>
        </div>
        <div className="">
          <p className="text-xs font-bold text-gray-300">20 Aug 202x</p>
        </div>
      </div>
    </div>
  );
}
function Regular({ title }) {
  return (
    <div className="my-3 mb-14 w-[86%]">
      <div>
        <p className="text-lg roboto font-bold text-[#f8a965]">{title}</p>
      </div>
      <div className="mt-4">
        <p className="text-sm roboto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          voluptas. Ut corrupti inventore corporis deleniti cum? Saepe in dicta
          amet ad earum.
        </p>
      </div>
    </div>
  );
}
function Card({ title }) {
  return (
    <div
      style={{ boxShadow: "2px 0px 10px #b6b6b6" }}
      className="h-[310px] flex flex-col justify-between mt-6 w-[90%] rounded-xl"
    >
      <div className=" m-1 rounded-xl flex flex-col justify-between h-[56%] p-3 bg-[#ffc089]">
        <div className="flex justify-between">
          <p className="text-xl font-bold text-[#964a09] w-[65%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <AiOutlineMenu className="text-xl font-bold text-[#814613]" />
        </div>
        <div className="flex px-2">
          <div
            className="bg-[#f6933e]
           w-[100px] flex items-center px-4 rounded-full text-sm text-white h-[33px]"
          >
            <AiOutlineTag className=" rotate-[-90deg]" />
            <p className="mx-2 font-bold">Lands</p>
          </div>
          <div
            className="bg-[#964a09]
           w-[140px] mx-2 flex items-center px-4 rounded-full text-sm text-white h-[33px]"
          >
            <AiOutlineTag className=" rotate-[-90deg]" />
            <p className="mx-2 font-bold">Real Estate</p>
          </div>
        </div>
      </div>
      <div className="flex pt-3 justify-between px-4 items-center">
        <p className="text-gray-500 text-sm roboto">Speaker</p>
        <div className="flex items-center">
          {/* Deisgn disks */}
          <FaCircle className="text-[#f6933e] top-0  text-2xl" />
          <FaCircle className="text-[#ffb16d] top-0 -translate-x-2 text-3xl" />
          <FaCircle className="text-[#964a09] top-0 -translate-x-4 text-2xl" />
        </div>
      </div>
      <div className="flex px-4 justify-between items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <AiOutlineClockCircle className="text-xl text-gray-600" />
            <p className="text-xs roboto mx-2 text-gray-600">Today</p>
          </div>
          <div className="">
            <p className="text-xs roboto text-gray-600">10:30 Am - 11:30 AM</p>
          </div>
        </div>
      </div>
      <div className="w-full flex py-2 justify-center">
        <button
          className="w-[90%]
         hover:text-blue-600 hover:bg-transparent hover:border-[#f6933e]
         border-2 border-transparent
        
          roboto text-white h-[46px] rounded-lg
           bg-[#f6933e]"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}
function SecondCard({ title }) {
  // Switch up
  return (
    <div
      style={{ boxShadow: "2px 0px 10px #b6b6b6" }}
      className="h-[310px] flex flex-col justify-between mt-6 w-[90%] rounded-xl"
    >
      <div
        className=" m-1 rounded-xl flex flex-col justify-between
       h-[56%] p-3 bg-[#dee5ec]"
      >
        <div className="flex justify-between">
          <p className="text-xl font-bold text-[#964a09] w-[65%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <AiOutlineMenu className="text-xl font-bold text-[#814613]" />
        </div>
        <div className="flex px-2">
          <div
            className="bg-[#ccd5df]
           w-[100px] flex items-center px-4 rounded-full text-sm text-gray-500 h-[33px]"
          >
            <AiOutlineTag className=" rotate-[-90deg]" />
            <p className="mx-2 font-bold">Lands</p>
          </div>
          <div
            className="bg-[#ccd5df]
           w-[140px] mx-2 flex items-center px-4 rounded-full text-sm text-gray-500 h-[33px]"
          >
            <AiOutlineTag className=" rotate-[-90deg]" />
            <p className="mx-2 font-bold">Real Estate</p>
          </div>
        </div>
      </div>
      <div className="flex pt-3 justify-between px-4 items-center">
        <p className="text-gray-500 text-sm roboto">Speaker</p>
        <div className="flex items-center">
          {/* Deisgn disks */}
          <FaCircle className="text-[#f6933e] top-0  text-2xl" />
          <FaCircle className="text-[#ffb16d] top-0 -translate-x-2 text-3xl" />
          <FaCircle className="text-[#964a09] top-0 -translate-x-4 text-2xl" />
        </div>
      </div>
      <div className="flex px-4 justify-between items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <AiOutlineClockCircle className="text-xl text-gray-600" />
            <p className="text-xs roboto mx-2 text-gray-600">Today</p>
          </div>
          <div className="">
            <p className="text-xs roboto text-gray-600">10:30 Am - 11:30 AM</p>
          </div>
        </div>
      </div>
      <div className="w-full flex py-2 justify-center">
        <button
          className="w-[90%]
         hover:text-blue-600 hover:bg-transparent hover:border-[#f6933e]
         border-2 border-transparent
        
          roboto text-white h-[46px] rounded-lg
           bg-[#f6933e]"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}
