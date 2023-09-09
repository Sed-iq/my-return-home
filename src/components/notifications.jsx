import { FaCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

export default () => {
  return (
    <div>
      <div className="flex sticky bg-white z-10 top-0 border-[1px] border-gray-300 flex-col space-y-5 py-4 items-center">
        <div className="flex w-[90%] justify-between items-center ">
          <div className="flex justify-center rounded-full bg-white p-[1px] border-2 border-[#f6933e] items-center">
            <FaCircle className="text-[45px] text-[#bebebe]" />
          </div>
          <div>
            <MdSearch className="text-3xl" />
          </div>
        </div>
        <div className=" w-[90%] flex items-center space-x-1">
          <p className="text-xl roboto">Notification</p>
          <div className="rounded-[50%] p-1 text-white bg-[#f6933e]">
            <p className="text-xs">34</p>
          </div>
        </div>
      </div>
      <div className="flex py-8 px-7 items-center justify-between">
        <p className="text-sm roboto text-gray-400">Show all</p>
        <p className="text-sm roboto text-gray-400">Mark all as read</p>
      </div>
      <div
        className="
       py-4 flex flex-col space-y-6 items-center"
      >
        <Notification action={"Liked your post"} />
        <Notification action={"Liked your photo"} />
        <Notification action={"added a photo to the group"} />
        <Notification action={"Liked your post"} />
        <Notification action={"Liked your photo"} />
        <Notification action={"Liked your post"} />
      </div>
    </div>
  );
};
function Notification({ action }) {
  return (
    <div
      style={{ boxShadow: "5px 10px 10px #eeeeeeee" }}
      className=" w-[90%] border-2 p-4  border-gray-200 rounded-lg"
    >
      <div className="flex items-center space-x-4 ">
        <FaCircle className="text-[40px] text-[#bebebe]" />
        <div className="flex flex-col space-y-1">
          <p className="roboto font-semibold text-gray-600 text-sm">
            Aarush Galloway{" "}
            <span className="mx-2 text-gray-500 text-xs">{action}</span>
          </p>
          <p className="roboto text-gray-400 text-xs">52 min ago</p>
        </div>
      </div>
    </div>
  );
}
