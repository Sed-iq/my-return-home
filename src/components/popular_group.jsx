import { FaArrowLeft, FaCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="flex sticky top-0 p-5 bg-[#ffffffb9] justify-between items-center">
        <div>
          <FaArrowLeft className="text-xl" />
        </div>
        <div>
          <p className="text-lg roboto">Popular groups</p>
        </div>
        <div>
          <MdOutlineMenu />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Community_Card name={"African United"} />
        <Community_Card name={"Donin Africanus"} />
        <Community_Card name={"Dokidis Afrikans"} />
        <Community_Card name={"Korard Home"} />
      </div>
    </div>
  );
};
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
