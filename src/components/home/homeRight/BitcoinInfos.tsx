import React, { useContext } from "react";
import { AppContext } from "../../../context/context";

const BitcoinInfos: React.FC = () => {
  const { cryptos, numStr } = useContext(AppContext);

  return (
    <div className="flex flex-row justify-center items-center bg-slate-100 h-14 w-[95%] mt-5 shadow-inner pt-3 pb-3 ml-8 rounded-md hover:scale-105 duration-700">
      {cryptos
        .filter((f: any) => f.name === "Bitcoin")
        .map((e: any) => (
          <a
            key={e.uuid}
            className="flex flex-row justify-between items-center w-[100%] mr-2 ml-2"
            href={e.coinrankingUrl}
            target="_blank"
            rel=" noopener noreferrer"
          >
            <div className="flex flex-row">
              <h3 className="text-orange-400">{e.rank}</h3>
              <img className="h-6 mr-1 ml-1" src={e.iconUrl} alt="btc" />
              <h3 className="text-orange-400">{e.name}</h3>
            </div>
            <p className="italic text-sm font-light">
              "Bitcoin est la première monnaie numérique décentralisée"
            </p>
            <h3 className="text-orange-400">{numStr(Math.round(e.price), 0)}$</h3>
          </a>
        ))}
    </div>
  );
};

export default BitcoinInfos;
