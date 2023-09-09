import Nav from "./nav";
import PostCard from "./post-card";
import RegularPost from "./regular-post";
export default () => {
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="mt-2 h-full">
        <PostCard />
        <RegularPost />
      </div>
    </div>
  );
};
