import { FaArrowLeft } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";

// Checkout
export default () => {
  return (
    <div className="h-full">
      <div className="w-full flex items-center justify-between p-6">
        <div className=" flex items-center justify-between">
          <button className="p-3 rounded-lg bg-[#f6933e]">
            <FaArrowLeft className="text-white" />
          </button>
          <p className="font-semibold mx-4 text-xl">Checkout</p>
        </div>
      </div>
      <div className=" p-4 px-8">
        <p className="font-semibold text-xl my-3">Payment Method</p>
        <div className="mt-6">
          <Card />
        </div>
      </div>
      <div className="px-8">
        <p className="text-xl font-semibold">Payment Details</p>
        <div className="my-3">
          <p className="text-sm font-semibold">Your email</p>
          <div>
            <input
              type="email"
              placeholder="Abdullahi@gmail.com"
              className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[100%] p-4 rounded
          "
            />
          </div>
        </div>
        <div className="my-3">
          <p className="text-sm font-semibold">CardHolder Name</p>
          <div>
            <input
              type="text"
              placeholder="Abdullahi Sediq"
              className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[100%] p-4 rounded
          "
            />
          </div>
        </div>
        <div className="my-3">
          <p className="text-sm font-semibold">Card Number</p>
          <div>
            <input
              type="password"
              placeholder="*** *** ***  518843"
              className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[100%] p-4 rounded
          "
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="my-3">
            <p className="text-sm font-semibold">Date</p>
            <div>
              <input
                type="text"
                placeholder="02 Nov 2021"
                className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[90%] p-4 rounded
          "
              />
            </div>
          </div>
          <div className="my-3">
            <p className="text-sm font-semibold">CVV</p>
            <div>
              <input
                maxLength={3}
                max={3}
                type="number"
                placeholder="123"
                className=" border-[1.6px] text-sm my-2 focus:shadow-[#8d8d8d3f] focus:shadow-2xl border-gray-300 focus:font-semibold outline-none focus:border-[#f6933e] w-[90%] p-4 rounded
          "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pb-4">
        <button className="text-white h-[65px] px-5 border-2 duration-100 border-transparent hover:border-[#f89853] hover:bg-white hover:text-[#f89853] flex justify-between items-center rounded-lg w-full font-semibold bg-[#f89853]">
          <div className="w-1/2 flex justify-center pr-3">
            <p className=" font-bold text-lg">Pay Now</p>
          </div>
          <div className="h-[65%] border-l-2 flex items-center justify-center border-white w-[40%]">
            <p className="mx-4 opensans-b text-lg">$4000</p>
          </div>
        </button>
      </div>
    </div>
  );
};
function Card() {
  return (
    <div className="bg-[#f1984b] flex flex-col justify-between text-white p-5 w-[100%] h-[230px] rounded-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm">Card Holder</p>
          <p className="text-sm my-1 font-bold">Abdullahi Sediq</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <MdAirplanemodeActive className="text-2xl" />
          <p className="text-sm font-semibold">PayPal</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          <p className="text-sm">Balance</p>
          <p className="text-xl font-semibold">$240,000</p>
        </div>
        <div className="">
          <p className="text-sm">
            {" "}
            <sup style={{ letterSpacing: "2px" }} className="text-xl font-bold">
              ......
            </sup>{" "}
            518843
          </p>
        </div>
      </div>
    </div>
  );
}
