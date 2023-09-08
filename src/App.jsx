import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/splash";
import Home from "./components/home";
import Followers from "./components/followers";
import Profile from "./components/profile";
import Login from "./components/login";
import Register from "./components/register";
import Checkout from "./components/checkout";
import Post from "./components/post";
import Discover from "./components/discover";
import Community from "./components/community";
import About from "./components/about";
export default () => {
  return (
    <div className="h-screen w-full sm:hidden block">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/post" element={<Post />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/*"
            element={<p className="text-center font-bold text-3xl">404</p>}
          />
        </Routes>
      </Router>
    </div>
  );
};
