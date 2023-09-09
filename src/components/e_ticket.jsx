import { FaArrowLeft, FaBarcode } from "react-icons/fa";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="h-full flex pb-8 flex-col space-y-5 justify-between items-center">
      <div className="flex flex-col items-center">
        <div className="p-4 flex w-full items-center space-x-6">
          <Link to={"/home"}>
            <button className="p-3 rounded-lg bg-[#f6933e]">
              <FaArrowLeft className="text-white " />
            </button>
          </Link>
          <p className="text-lg font-bold">E-Ticket</p>
        </div>
        <div className="w-[90%] mt-6">
          <p className="text-xl roboto">Instruction</p>
          <p className="mt-5 text-sm font-semibold text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            laudantium. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nisi recusandae beatae illum a.
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center h-[500px] w-[100%] ">
        <Receipt />
      </div>
      <div className="w-[100%] my-7 py-4 flex justify-center">
        <button className="roboto text-white rounded-xl font-semibold w-[80%] py-3 bg-[#f6933e]">
          Download E-Ticket
        </button>
      </div>
    </div>
  );
};
function Receipt() {
  return (
    <div className="h-[100%] pb-5 border-[1.5px] border-slate-600 flex flex-col justify-between  items-center rounded-2xl w-[80%]">
      <div className=" w-[90%] pt-10 flex flex-col p-4 h-[65%]">
        <div className="flex items-center justify-between">
          <p className="roboto font-semibold">Bali</p>
          <p className="roboto text-[#f69e51] font-semibold">e-ticket</p>
        </div>
        <div className="flex flex-col space-y-[3em]">
          <div className="flex mt-8 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-semibold roboto">Date</p>
              <p className="text-black roboto text-sm font-semibold">
                05/08/23
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-semibold roboto">
                Until
              </p>
              <p className="text-black roboto text-sm font-semibold">
                14/08/23
              </p>
            </div>
          </div>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-semibold roboto">
                Seats
              </p>
              <p className="text-black roboto text-sm font-semibold">B1, C1</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-semibold roboto">Time</p>
              <p className="text-black roboto text-sm font-semibold">
                01.00 PM
              </p>
            </div>
          </div>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-semibold roboto">
                Payment
              </p>
              <p className="text-black roboto text-sm font-semibold">
                Successful
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-semibold roboto">
                Order
              </p>
              <p className="text-black roboto text-sm font-semibold">1904566</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="cutout"
        className="mt-10 relative w-full border-black border-dashed border-b-[3px]"
      ></div>
      <div className=" w-full flex justify-center items-center">
        <FaBarcode className="text-[90px]" />
        <FaBarcode className="text-[90px]" />
      </div>
    </div>
  );
}
