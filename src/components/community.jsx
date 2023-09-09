import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="h-full w-full flex-col bg-[#d9d9d9] justify-between">
      <div className="h-[50%] bg-[#d9d9d9] p-6 w-full">
        <Link to={"/discover"}>
          <button className="rounded-lg p-3 bg-[#f6933e]">
            <FaArrowLeft className="text-white" />
          </button>
        </Link>
      </div>
      <div className="min-h-[50%] flex flex-col items-center bg-white rounded-t-3xl">
        <div className="w-[85%] ">
          <div className="py-10">
            <p className="text-sm roboto">Catergory</p>
            <p className="text-xl mt-2 font-bold roboto">Bator Community</p>
            <p className="mt-5 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              sit excepturi repellat aperiam inventore dicta possimus harum
              magni deleniti. Harum!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#d9d9d9] mx-2 rounded-2xl h-[120px] w-[120px]"></div>
            <div className="bg-[#d9d9d9] mx-2 rounded-2xl h-[120px] w-[120px]"></div>
            <div className="bg-[#d9d9d9] mx-2 rounded-2xl h-[120px] w-[120px]"></div>
          </div>
          <div className="my-4 mt-7">
            <button className="text-white w-full font-bold roboto p-4 bg-[#f59f54] rounded-2xl">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
