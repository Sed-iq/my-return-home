import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div>
      <Nav />
      <div className="mt-7">
        <Followers name={"Kenny Rodgers"} />
        <Followers name={"Elvis Presley"} />
        <Followers name={"Gabin Belsing"} />
        <Followers name={"Andrew Garfield"} />
        <Followers name={"Peter Parker"} />
        <Followers name={"Mary Jones"} />
        <Followers name={"Ada Lovelace"} />
        <Followers name={"Winston Churchill"} />
        <Followers name={"Emma Watson"} />
        <Followers name={"Daniel Radcliffe"} />
      </div>
    </div>
  );
  function Followers({ name }) {
    return (
      <div className="h-[120px] px-10 flex justify-between items-center border-y-2 border-gray-100">
        <div className="flex items-center">
          <div className="p-8 rounded-full mx-3 bg-gray-400"></div>
          <div className="flex mx-3 flex-col justify-center">
            <p className="text-slate-700 opensans-b">{name}</p>
            <p className="text-slate-500 text-xs my-[5px]">@{name}</p>
          </div>
        </div>
        <div>
          <button className=" hover:bg-transparent duration-150 hover:border-[#f6933e] border-2 border-transparent hover:text-black bg-[#f6933e] text-white p-2 px-4 rounded-full opensans-b text-xs ">
            Follow
          </button>
        </div>
      </div>
    );
  }
};
function Nav() {
  return (
    <div className=" w-full bg-[#ffffff] z-10 sticky top-0">
      <div className=" py-4 w-[60%] flex justify-between items-center p-4">
        <Link to={"/home"}>
          <button className="bg-[#ff833f] p-4 rounded-xl text-white text-xl">
            <FaArrowLeft />
          </button>
        </Link>
        <p
          style={{ letterSpacing: ".6px" }}
          className=" text-slate-800 font-bold text-xl"
        >
          Followers (1k)
        </p>
      </div>
    </div>
  );
}
