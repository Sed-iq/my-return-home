import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { MdMenu, MdOutlineShare, MdChatBubbleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

// Post section
export default () => {
  return (
    <div className="">
      <div className="h-[80px] z-10 bg-[#38383865] fixed p-8 flex items-center justify-between w-full">
        {/* Nav */}
        <Link to={"/home"}>
          <button className="bg-[#f6943ebd] p-4 rounded-lg">
            <FaArrowLeft className="text-white" />
          </button>
        </Link>
        <div className="flex items-baseline">
          <button className="text-white">
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
      <div
        style={{ background: "linear-gradient(rgb(214,213,213),gray )" }}
        className="h-[430px] flex flex-col justify-end"
      >
        <div className="flex justify-between text-white p-4 items-baseline">
          <div className="flex items-center">
            <MdOutlineShare className="text-xl" />
            <p className="mx-1 text-sm">8</p>
          </div>
          <div className="flex px-4">
            <div className="flex mx-1 items-center">
              <AiOutlineHeart className="text-xl" />
              <p className="mx-1 text-sm">186</p>
            </div>
            <div className="flex mx-1 items-center">
              <AiOutlineMessage className="text-xl" />
              <p className="mx-1 text-sm">38</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} /> <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} /> <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} /> <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} /> <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} /> <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} /> <Post name={"Gabin Belsing"} />
        <Post name={"Andrew Tate"} />
        <Post name={"Richard Haderson"} />
        <Post name={"Suichiro Yagami"} />
      </div>
    </div>
  );
};
function Post({ name }) {
  return (
    <div className=" p-4 px-[30px] border-b-[1px] w-full flex flex-col">
      <div className="flex flex-row items-center justify-between">
        {/* Profile header */}
        <Link to={"/profile"} className="flex items-center ">
          <div className="bg-[#bebebe] relative rounded-[50%] p-[30px]"></div>
          <div className="flex flex-col mx-4">
            <p className="text-base opensans-b my-[0.23em] text-gray-600">
              {name}
            </p>
            <p className="text-xs font-bold text-gray-400">52 minutes ago </p>
          </div>
        </Link>
        <div>
          <AiOutlineHeart className="text-2xl text-gray-400" />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic,
          vero harum unde ducimus mollitia!
        </p>
      </div>
    </div>
  );
}
