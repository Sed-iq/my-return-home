import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { MdChatBubbleOutline, MdCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="">
      <div className="flex p-7 py-4 sticky top-0 z-10 bg-[#ffffffcc] border-b-2 border-gray-300 items-center justify-between">
        {/* Header */}
        <Link to={"/home"}>
          <button className="p-3 rounded-md bg-[#f8a965]">
            <FaArrowLeft className="text-white" />
          </button>
        </Link>
        <div>
          <p className="text-base opensans-b">Profile</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-2">
            <AiOutlineHeart className="text-[1.3em]" />
          </div>
          <div className="mx-2">
            <AiOutlineSearch className="text-[1.3em]" />
          </div>
        </div>
      </div>
      <div>
        {/* Profile */}
        <div className="flex justify-center mt-[4.2em]">
          {/* PFP */}
          <div className="border-[3.43px] border-[#f8a965] p-[.1em] rounded-full">
            <div className="h-[160px] w-[160px] border-2  bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 flex-col items-center">
        <p className="text-lg opensans-b text-slate-800 my-3">Peter Gregory</p>
        <p className=" text-gray-600 text-xs">Venture Capitalist</p>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="h-[50px] w-[50px] mx-2 flex justify-center rounded-full items-center bg-[#ecebeb]">
          <div className="h-[35px] bg-gray-300 rounded-full w-[35px]"></div>
        </div>
        <div className="h-[50px] w-[50px] mx-2 flex justify-center rounded-full items-center bg-[#ecebeb]">
          <div className="h-[35px] bg-gray-300 rounded-full w-[35px]"></div>
        </div>
        <div className="h-[50px] w-[50px] mx-2 flex justify-center rounded-full items-center bg-[#ecebeb]">
          <div className="h-[35px] bg-gray-300 rounded-full w-[35px]"></div>
        </div>
        <div className="h-[50px] w-[50px] mx-2 flex justify-center rounded-full items-center bg-[#ecebeb]">
          <div className="h-[35px] bg-gray-300 rounded-full w-[35px]"></div>
        </div>
      </div>
      <div className="my-7 flex justify-center items-center">
        <div className="mr-[2em] p-2 px-5 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
          <MdCircle className="text-green-700 text-[14px]" />
          <div className="text-sm flex mx-[7px] text-gray-600">
            <MdChatBubbleOutline className="text-2xl" />
            <p className="mx-2 font-semibold">Message</p>
          </div>
        </div>
        <div className="">
          <button className=" hover:bg-transparent duration-150 hover:border-[#f6933e] border-2 border-transparent hover:text-black bg-[#f6933e] text-white p-2 px-4 rounded-full opensans-b text-xs ">
            Follow
          </button>
        </div>
      </div>
      {/* Followers section */}
      <div className="flex w-full mt-10 justify-between px-10 items-center">
        <Link
          to={"/followers"}
          className="h-[90px] w-[100px] flex flex-col items-center justify-center rounded-xl border-2 border-gray-200"
        >
          <p className="text-xl my-1 font-medium">6.4k</p>
          <p className="text-sm font-semibold text-gray-400">Followers</p>
        </Link>
        <div className="h-[90px] w-[100px] flex flex-col items-center justify-center rounded-xl border-2 border-gray-200">
          <p className="text-xl my-1 font-medium">572</p>
          <p className="text-sm font-semibold text-gray-400">Post</p>
        </div>
        <div className="h-[90px] w-[100px] flex flex-col items-center justify-center rounded-xl border-2 border-gray-200">
          <p className="text-xl my-1 font-medium">2.5k</p>
          <p className="text-sm font-semibold text-gray-400">Following</p>
        </div>
      </div>
      {/* Pictures section */}
      <div className="mt-10 flex overflow-x-auto overflow-y-hidden min-w-full border-t-2 px-7 border-gray-200 py-8">
        <div className="flex space-x-3">
          <div className="h-[18em] rounded-xl w-[14em] bg-[#bebebe]"></div>
          <div className="h-[18em] rounded-xl w-[14em] bg-[#bebebe]"></div>
          <div className="h-[18em] rounded-xl w-[14em] bg-[#bebebe]"></div>
          <div className="h-[18em] rounded-xl w-[14em] bg-[#bebebe]"></div>
          <div className="h-[18em] rounded-xl w-[14em] bg-[#bebebe]"></div>
        </div>
      </div>
    </div>
  );
};
