import { AiOutlineSend } from "react-icons/ai";
import { FaArrowLeft, FaCircle } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="min-h-full flex flex-col justify-between bg-[#eeeeee]">
      <div className="flex border-b-2 border-gray-200 sticky items-center top-0 bg-white z-10 justify-between pt-4 p-4">
        <Link to={"/home"}>
          <button className="p-3 rounded-lg bg-[#f6933e]">
            <FaArrowLeft className="text-white " />
          </button>
        </Link>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <FaCircle className="text-sm text-green-500" />
            <p className="roboto font-semibold">Gabin Belsing</p>
          </div>
          <p className="text-gray-400 text-xs font-semibold">
            Last active: 10 sec ago
          </p>
        </div>

        <div className="flex justify-center p-3 bg-[#f6943e2d] rounded-full items-center">
          <MdOutlinePhone className="text-2xl text-[#f6933e]" />
        </div>
      </div>
      <div className="w-[100%] min-h-[550px] py-10 items-center flex flex-col space-y-6 px-3">
        <MeBubble msg={"Hello Gabin, it's me Sadiq"} />
        <OtherBubble msg={"Oh, hello Sadiq, how are you?"} />
        <MeBubble msg={"I'm fine thank you."} />
      </div>
      <div className="p-4 border-2 sticky bottom-0 mt-10 flex items-center justify-center bg-white h-[75px]">
        <MessageSender />
      </div>
    </div>
  );
};
function MessageSender() {
  return (
    <div className="w-[100%] flex space-x-2 ">
      <div className="w-[100%]">
        <input
          placeholder="Say something"
          type="text"
          className="border-2 w-full text-sm font-slate-700 outline-none focus:border-2 border-gray-100 p-4 rounded-md"
        />
      </div>
      <div className="">
        <button className="p-4 outline-none hover:bg-transparent hover:text-[#f8a55d] hover:border-[#f8a55d] border-2 border-transparent bg-[#f8a55d] rounded-full text-white">
          <AiOutlineSend className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
function MeBubble({ msg }) {
  return (
    <div className="w-[100%] flex justify-end">
      <div className="flex space-x-3">
        <div className="p-4 text-white text-sm rounded-tl-2xl rounded-b-2xl bg-[#f6933e]">
          {msg}
        </div>
        <div>
          <FaCircle className="text-[50px] border-2 border-white rounded-full text-[#bebebe]" />
        </div>
      </div>
    </div>
  );
}
function OtherBubble({ msg }) {
  return (
    <div className="w-[100%] flex justify-start">
      <div className="flex flex-row-reverse space-x-reverse space-x-3">
        <div className="p-4 text-slate-700 text-sm rounded-tr-2xl rounded-b-2xl bg-[#fff]">
          {msg}
        </div>
        <div>
          <FaCircle className="text-[50px] border-2 border-white rounded-full text-[#bebebe]" />
        </div>
      </div>
    </div>
  );
}
