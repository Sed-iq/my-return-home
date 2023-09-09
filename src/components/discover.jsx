import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

export default () => {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <div className="h-[280px] w-full flex flex-col justify-between py-12 bg-[#d4d3d3]">
        <div className="px-10">
          <p className="text-white text-xl opensans-b font-extrabold">
            Discover
          </p>
        </div>
        <div className="px-10 flex justify-center">
          <div
            className={`flex ${
              focus ? " border-[#f6933e]" : "border-transparent"
            }  w-[100%] border-2 rounded-[8px] items-center h-[46px]  bg-white`}
          >
            <MdOutlineSearch className="text-gray-400 m-3 text-2xl" />
            <input
              onMouseEnter={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              type="text"
              className={`bg-white text-xs outline-none font-bold text-gray-600 h-full w-[80%]`}
              placeholder="Search community"
            />
          </div>
        </div>
      </div>
      <div className="my-8 px-2 py-2 justify-center flex overflow-x-auto overflow-y-hidden min-w-full">
        <Category category={"Sports"} />
        <Category category={"Social"} />
        <Category category={"Travelling"} />
        <Category category={"Painting"} />
      </div>
      <div className="my-10 flex flex-col items-center">
        <Community_Card name={"Donin Africanus"} />
        <Community_Card name={"Botish Community "} />
        <Community_Card name={"Dias Community"} />
      </div>
    </div>
  );
};
function Category({ category }) {
  return (
    <div className="h-[43px] mr-3 flex items-center justify-center px-[20px] text-black bg-[#d4d3d3] rounded-lg">
      <p className="text-gray-600 text-xs font-bold">{category}</p>
    </div>
  );
}
function Community_Card({ name }) {
  return (
    <Link
      to={"/community"}
      style={{ background: "linear-gradient(#dadada, #a3a2a2)" }}
      className="w-[90%] h-[180px] mb-4 flex flex-col justify-end px-4 rounded-lg"
    >
      <div>
        <p
          style={{ letterSpacing: "1.0994px" }}
          className="text-xl roboto text-white font-extrabold"
        >
          {name}
        </p>
      </div>
      <div className="flex mb-4 items-center">
        <div className="flex relative mt-2 items-center">
          {/* Deisgn disks */}
          <FaCircle className="text-[#f6933e] top-0  text-2xl" />
          <FaCircle className="text-[#ffb16d] top-0 -translate-x-2 text-2xl" />
          <FaCircle className="text-[#964a09] top-0 -translate-x-4 text-2xl" />
        </div>
        <div className="pt-2">
          <p className="text-sm text-white roboto ">783 members</p>
        </div>
      </div>
    </Link>
  );
}
