import React from "react";
import HomeLeftSide from "../components/home/HomeLeftSide";

const HomePage = () => {
  return (
    <div className="bg-slate-900 min-h-[100vh] flex flex-col justify-center">
      <div className="flex flex-row justify-between">
        <HomeLeftSide />
      </div>
    </div>
  );
};

export default HomePage;
