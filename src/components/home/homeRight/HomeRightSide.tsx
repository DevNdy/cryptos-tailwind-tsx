import React from "react";
import BitcoinInfos from "./BitcoinInfos";
import ChartBitcoin from "./ChartBitcoin";

const HomeRightSide: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center w-[700px]  mr-20 ml-8 rounded-2xl ">
      <h2 className="text-2xl mt-3 text-orange-400">– Bitcoin –</h2>
      <ChartBitcoin />
      <BitcoinInfos />
    </div>
  );
};

export default HomeRightSide;
