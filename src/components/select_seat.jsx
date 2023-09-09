import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="p-4 bg-[#ffffffc0] z-10 sticky top-0 flex w-full items-center space-x-6">
        <Link to={"/home"}>
          <button className="p-3 rounded-lg bg-[#f6933e]">
            <FaArrowLeft className="text-white " />
          </button>
        </Link>
        <p className="text-lg font-bold">Select Seat</p>
      </div>
      <div className="w-full mt-6 flex flex-col items-center space-y-8">
        <div
          style={{ boxShadow: "0px 3px 10px #eeeeeeee" }}
          className="rounded-xl p-5 w-[80%] space-y-3 flex flex-col justify-between"
        >
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-sm roboto">Date</p>
              <div className="p-3 border-2 border-black flex space-x-2 rounded-3xl">
                <FaCalendar className="text-[#fca559] text-sm" />
                <p className="text-xs roboto">05 Aug 2023</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm roboto">Until</p>
              <div className="p-3 border-2 border-black flex space-x-2 rounded-3xl">
                <FaCalendar className="text-[#fca559] text-sm" />
                <p className="text-xs roboto">14 Aug 2023</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-sm roboto">Date</p>
              <div className="p-3 border-2 border-black flex space-x-2 rounded-3xl">
                <FaCalendar className="text-[#fca559] text-sm" />
                <p className="text-xs roboto">05 Aug 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 3px 10px #eeeeeeee" }}
          className="rounded-xl p-5 w-[95%] space-y-3 flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="p-3 rounded bg-[#fbd4b2]"></div>
              <p className="text-xs roboto">Available</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-3 rounded bg-[#f6933e]"></div>
              <p className="text-xs roboto">Selected</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-3 rounded bg-[#e0e0e0]"></div>
              <p className="text-xs roboto">Unavailable</p>
            </div>
          </div>
          <div className="flex mt-10 justify-between items-center">
            <div className="flex space-x-5">
              <div className="flex flex-col items-center space-y-5">
                <p className="text-sm text-gray-400">A</p>
                <Unavail />
                <BlockAvail />
                <BlockAvail />
                <BlockAvail />
                <Unavail />
              </div>
              <div className="flex flex-col items-center space-y-5">
                <p className="text-sm text-gray-400">B</p>
                <Selected />
                <BlockAvail />
                <Unavail />
                <BlockAvail />
                <BlockAvail />
              </div>
              <div className="flex flex-col items-center space-y-5">
                <p className="text-sm text-gray-400">C</p>
                <Selected />
                <Unavail />
                <BlockAvail />
                <BlockAvail />
                <BlockAvail />
              </div>
            </div>
            <div className="flex flex-col space-y-10 mt-10 items-center justify-end ">
              <p className="text-gray-500 text-sm">1</p>
              <p className="text-gray-500 text-sm">2</p>
              <p className="text-gray-500 text-sm">3</p>
              <p className="text-gray-500 text-sm">4</p>
              <p className="text-gray-500 text-sm">5</p>
            </div>
            <div className="flex space-x-5">
              <div className="flex flex-col items-center space-y-5">
                <p className="text-sm text-gray-400">D</p>
                <Unavail />
                <BlockAvail />
                <BlockAvail />
                <BlockAvail />
                <BlockAvail />
              </div>
              <div className="flex flex-col items-center space-y-5">
                <p className="text-sm text-gray-400">E</p>
                <Unavail />
                <BlockAvail />
                <Unavail />
                <BlockAvail />
                <BlockAvail />
              </div>
              <div className="flex flex-col items-center space-y-5">
                <p className="text-sm text-gray-400">F</p>
                <Unavail />
                <BlockAvail />
                <Unavail />
                <BlockAvail />
                <Unavail />
              </div>
            </div>
          </div>
          <div className="pt-5 flex flex-col px-4 space-y-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Your Seat</p>
              <p className="text-sm roboto">B1, C1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-sm text-[#f6933e] font-bold roboto">$4000</p>
            </div>
          </div>
        </div>
        <div className="w-[95%] flex pb-6 justify-center">
          <button className="p-3 w-full hover:bg-transparent hover:border-[#f6933e] hover:text-gray-700 border-2 border-transparent text-white roboto rounded-lg bg-[#f6933e]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
function BlockAvail() {
  return <div className="p-5 rounded bg-[#fbd4b2]"></div>;
}
function Selected() {
  return <div className="p-5 rounded bg-[#f6933e]"></div>;
}
function Unavail() {
  return <div className="p-5 rounded bg-[#e0e0e0]"></div>;
}
