import React from "react";
import HomeBottom from "../components/home/HomeBottom";
import HomeLeftSide from "../components/home/HomeLeftSide";
import HomeRightSide from "../components/home/homeRight/HomeRightSide";

const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-[100vh] flex flex-col justify-center">
      <div className="flex flex-row justify-between items-center mt-20">
        <HomeLeftSide />
        <HomeRightSide />
      </div>
      <HomeBottom />
    </div>
  );
};

export default HomePage;
