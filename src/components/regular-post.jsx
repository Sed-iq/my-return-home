import { MdChatBubbleOutline, MdOutlineShare } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default () => {
  // Regular post card
  return (
    <div className=" p-4 px-[30px] border-y-2 w-full flex flex-col">
      <div className="flex flex-row items-center justify-between">
        {/* Profile header */}
        <Link to={"/profile"} className="flex items-center ">
          <div className="bg-[#bebebe] relative rounded-[50%] p-[30px]">
            <div className="p-[7px] bg-green-700 right-0 bottom-[2px]  absolute border-[1.2px] border-white rounded-[50%]"></div>
          </div>
          <div className="flex flex-col mx-4">
            <p className="text-base opensans-b my-[0.23em] text-gray-600">
              Blessing Ibrahim
            </p>
            <p className="text-xs font-bold text-gray-400">1 hr ago </p>
          </div>
        </Link>
        <div>
          <button className=" hover:bg-transparent duration-150 hover:border-[#f6933e] border-2 border-transparent hover:text-black bg-[#f6933e] text-white p-2 px-4 rounded-full opensans-b text-xs ">
            Follow
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic,
          vero harum unde ducimus mollitia!
        </p>
      </div>
      <div className="mt-6 mb-3 flex justify-between">
        <div className="flex items-center">
          <MdOutlineShare className="text-2xl text-slate-700" />
          <p className="text-sm mx-2 text-gray-500 font-semibold">100</p>
        </div>
        <div className="flex mx-1 w-1/2 justify-end">
          <div className="flex items-center">
            <AiOutlineHeart className="text-2xl text-slate-700" />
            <p className="text-sm mx-2 text-gray-500 font-semibold">400</p>
          </div>
          <div className="flex mx-1 items-center">
            <MdChatBubbleOutline className="text-2xl text-slate-700" />
            <p className="text-sm mx-2 text-gray-500 font-semibold">40</p>
          </div>
        </div>
      </div>
    </div>
  );
};
