import React, { useContext } from "react";
import CalculMC from "../components/marketcap/CalculMC";
import DescriptionMC from "../components/marketcap/DescriptionMC";
import DoughnutMarketCap from "../components/marketcap/DoughnutMarketCap";
import { AppContext } from "../context/context";

const MarketCap = () => {
  const { result } = useContext(AppContext);
  return (
    <div className="min-h-[100vh] w-full bg-slate-900 flex flex-col items-center">
      <div className=" w-full flex flex-row items-center justify-center mt-[200px]">
        <DoughnutMarketCap />
        <DescriptionMC />
      </div>
      <CalculMC />
      {result !== 0 ? (
        <div className="flex flex-row justify-end w-[1000px] ">
          <p className="text-slate-900 bg-orange-300 mt-5 p-2 rounded-xl ">
            résultat: <span className="italic text-slate-600">{result}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MarketCap;
