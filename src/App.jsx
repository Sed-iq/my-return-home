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
import Subs_community from "./components/subs_community";
import E_ticket from "./components/e_ticket";
import Popular_group from "./components/popular_group";
import Notifications from "./components/notifications";
import Profile_settings from "./components/profile_settings";
import Select_seat from "./components/select_seat";
import Message from "./components/message";
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
          <Route path="/subscribe" element={<Subs_community />} />
          <Route path="/ticket" element={<E_ticket />} />
          <Route path="/popular" element={<Popular_group />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Profile_settings />} />
          <Route path="/select" element={<Select_seat />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
