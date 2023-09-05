import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/splash";
import Home from "./components/home";
import Followers from "./components/followers";
export default () => {
  return (
    <div className="h-screen w-full sm:hidden block">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/followers" element={<Followers />} />
        </Routes>
      </Router>
    </div>
  );
};
