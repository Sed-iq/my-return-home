import { MdOutlineCameraAlt, MdOutlineSearch } from "react-icons/md";

export default () => {
  return (
    <nav className=" top-0 z-10 bg-[#ffffffd5] sticky flex flex-col">
      <div className="mx-4">
        <div className=" p-4 flex items-center justify-between">
          <div>
            <MdOutlineCameraAlt className="text-[36px] text-gray-700" />
          </div>
          <div>
            <MdOutlineSearch className="text-[36px] text-gray-700" />
          </div>
        </div>
        <div className="mb-[15px] mx-3">
          <p
            style={{ letterSpacing: "0.3px" }}
            className="text-[17px] font-bold text-gray-800"
          >
            Timeline
          </p>
        </div>
      </div>
    </nav>
  );
};
