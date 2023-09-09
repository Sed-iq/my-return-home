import { FaArrowLeft, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="h-full">
      <div className="p-5">
        <Link to={"/home"}>
          <button className="p-3 rounded-lg bg-[#f6933e]">
            <FaArrowLeft className="text-white " />
          </button>
        </Link>
      </div>
      <div className="">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold"> My Return Home</p>
          <p className="text-sm font-semibold text-gray-400 mt-2">
            Sign in to your account
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <input
            type="email"
            placeholder="Email address"
            className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[90%] p-4 rounded
          "
          />{" "}
          <input
            type="password"
            placeholder="Enter your password"
            className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[90%] p-4 rounded
        "
          />
          <Link to={"#"} className="mt-4 w-[90%]">
            <p className="text-sm underline text-[#f6933e]">
              Forgot your password?
            </p>
          </Link>
          <div className="mt-4 w-[90%]">
            <button className="w-full border-2 border-transparent hover:bg-white hover:border-[#f6933e] p-3 py-4 rounded-md text-white bg-[#f6933e]">
              Sign in
            </button>
          </div>
          <div className="w-[90%] flex justify-between mt-7">
            <div className="w-[50%] flex items-center ">
              <div className="border-[1px] w-[100%] border-gray-300"></div>
            </div>
            <p
              className="w-[100px] text-center text-sm font-semibold text-gray-600
            "
            >
              Or with
            </p>
            <div className=" w-[50%] flex items-center ">
              <div className="border-[1px] w-[100%] border-gray-300"></div>
            </div>
          </div>
          <div className="flex mt-4 w-[90%] flex-col">
            <div className="flex my-2 hover:bg-black hover:text-white items-center w-full p-4 border-[1px] rounded border-gray-200 justify-center">
              <FaGoogle className="mx-2" />
              <p className="text-sm">Sign in with google</p>
            </div>
            <div className="flex hover:bg-[black] hover:text-white my-2 items-center w-full p-4 border-[1px] rounded border-gray-200 justify-center">
              <FaTwitter className="mx-2 text-blue-500" />
              <p className="text-sm">Sign in with Twitter</p>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex justify-center mt-4">
          <p className="text-xs text-gray-400">
            Don't have an account? Let's{" "}
            <span className="text-[#f6933e] underline">
              <Link to={"/register"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
