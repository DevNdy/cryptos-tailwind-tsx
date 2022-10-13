import React from "react";
import CalculMC from "../components/analyses/CalculMC";
import DescriptionMC from "../components/analyses/DescriptionMC";
import DoughnutMarketCap from "../components/analyses/DoughnutMarketCap";

const Analyses = () => {
  return (
    <div className="min-h-[100vh] w-full bg-slate-900 flex flex-col items-center">
      <div className=" w-full flex flex-row items-center justify-center mt-[200px]">
        <DoughnutMarketCap />
        <DescriptionMC />
      </div>
      <CalculMC />
    </div>
  );
};

export default Analyses;
