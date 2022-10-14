import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import CardCryptoPriceLink from "../../ui-reusable/CardCryptoPriceLink";

const HomeBottom: React.FC = () => {
  const { cryptos } = useContext(AppContext);
  console.log(cryptos);

  return (
    <div className="h-[50px] w-[90%]  text-white ml-20 mr-20  mb-10 mt-8 flex flex-row justify-around">
      {cryptos
        .filter(
          (f: any) =>
            f.name === "Ethereum" ||
            f.name === "Tether USD" ||
            f.name === "USDC" ||
            f.name === "Binance Coin" ||
            f.name === "XRP"
        )
        .map((e: any) => (
          <CardCryptoPriceLink
            key={e.name}
            url={e.coinrankingUrl}
            name={e.name}
            rank={e.rank}
            price={e.price}
            icon={e.iconUrl}
          />
        ))}
    </div>
  );
};

export default HomeBottom;
