import { FaArrowLeft, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// Subscribing for community
export default () => {
  return (
    <div className="h-full w-full flex flex-col bg-[#d9d9d9] justify-between">
      <div className="h-[50%] bg-[#d9d9d9] p-6 w-full">
        <Link to={"/discover"}>
          <button className="rounded-lg p-3 bg-[#f6933e]">
            <FaArrowLeft className="text-white" />
          </button>
        </Link>
      </div>
      <div className="min-h-[40%] bottom-0  flex flex-col items-center bg-white rounded-t-3xl">
        <div className="w-[85%] flex flex-col justify-between">
          <div className="py-10">
            <p className="text-2xl mt-2 font-bold roboto">Bali</p>
            <div className="flex items-center justify-between">
              <div className="flex mt-3 space-x-2">
                <FaStar className="text-yellow-400 text-xl mx-1" />
                <p className="roboto font-bold">5</p>
                <p className="text-sm font-bold text-gray-300">(100+)</p>
              </div>
              <p className="font-bold underline text-[#f58c31]">See Reveiw</p>
            </div>
            <p className="mt-5 text-lg roboto text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              sit excepturi repellat aperiam inventore dicta possimus harum
              magni deleniti. Harum!
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg roboto text-[#f69e51]">$800/day</p>
            <div className="space-x-2 flex items-center">
              <div className="flex p-3 rounded-xl border-2">
                <FaMinus className="text-sm text-gray-600" />
              </div>
              <p className="roboto text-gray-600 px-2">5</p>
              <div className="flex p-3 rounded-xl bg-[#f69e51]">
                <FaPlus className="text-sm text-white" />
              </div>
            </div>
          </div>
          <div className="my-4 mt-7">
            <button className="text-white w-full font-bold roboto p-4 bg-[#f59f54] rounded-2xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
