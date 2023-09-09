import { FaAngleRight, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="p-6 flex items-center justify-between">
        <Link to={"/profile"} className="flex space-x-3 items-center">
          <div className="border-2 border-[#f6933e] rounded-full p-[1.9px]">
            <FaCircle className="text-[50px] text-[#bebebe]" />
          </div>
          <div className="flex-col">
            <p className="roboto font-semibold">Areeba Schwartz</p>
            <p className="roboto text-gray-500 text-xs font-semibold">
              @areebaschawrtz
            </p>
          </div>
        </Link>

        <div className="p-3 border-2 rounded-full border-gray-300">
          <FaAngleRight className="text-gray-500 text-xl" />
        </div>
      </div>
      <div className="flex w-full justify-between px-10 items-center">
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
      <div className="flex items-center py-7 flex-col space-y-7">
        <Option
          name={"Notifications"}
          info={"See your recent activity"}
          goto={"notifications"}
        />{" "}
        <Option
          name={"Friends"}
          info={"Friendlist totals"}
          goto={"followers"}
        />{" "}
        <Option
          name={"Messages"}
          info={"Message your friends"}
          goto={"messages"}
        />
        <Option name={"Albums"} info={"Save or post your albums"} goto={"#"} />
        <Option
          name={"Groups"}
          info={"Discover or create groups"}
          goto={"discover"}
        />
        <Option name={"Coaching"} info={"Relocating & residency"} goto={"#"} />
        <Option
          name={"Housing Services"}
          info={"TGW Property Solutions"}
          goto={"#"}
        />
        <Option
          name={"Visa Services"}
          info={"VOA and Stamp extensions"}
          goto={"#"}
        />
        <Option
          name={"Legal Services"}
          info={"Book an appointment for..."}
          goto={"#"}
        />
        <Option
          name={"Contact us"}
          info={"Book and appointment for..."}
          goto={"about"}
        />
        <Option
          name={"Investments"}
          info={"Invest in properties..."}
          goto={"#"}
        />
      </div>
      <div className="mt-3 flex flex-col items-center py-2 border-t-2 border-gray-300">
        <Option
          name={"Notifications"}
          info={"See your recent activity"}
          goto={"notifications"}
        />
        <div className="w-[90%] pb-4 mt-5">
          <button className="rounded-lg border-2 bg-[#ffe9e9] text-sm font-bold text-[#ff5f5f] border-[#ffc6c6] p-4 w-full ">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
function Option({ name, info, goto }) {
  return (
    <Link to={`/${goto}`} className="w-[86%] flex items-center justify-between">
      <div className="flex space-x-3 items-center">
        <div className="flex-col">
          <p className=" font-semibold">{name}</p>
          <p className="roboto text-gray-500 text-xs ">{info}</p>
        </div>
      </div>
      <div className="p-3 border-2 rounded-full border-gray-300">
        <FaAngleRight className="text-gray-500 text-xl" />
      </div>
    </Link>
  );
}
