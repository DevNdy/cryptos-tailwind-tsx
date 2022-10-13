import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { AppContext } from "../../../context/context";
import CardCryptoPriceLink from "../../../ui-reusable/CardCryptoPriceLink";

const HomeBottom = () => {
  const { cryptos } = useContext(AppContext);
  return (
    <div className="h-[50px] w-[90%] text-white ml-20 mr-20 mb-10 mt-8 flex flex-row justify-around">
      <CardCryptoPriceLink
        url={cryptos[1].coinrankingUrl}
        name="Ethereum"
        rank={cryptos[1].rank}
        price={cryptos[1].price}
        icon={cryptos[1].iconUrl}
      />
      <CardCryptoPriceLink
        url={cryptos[2].coinrankingUrl}
        name="USDT"
        rank={cryptos[2].rank}
        price={cryptos[2].price}
        icon={cryptos[2].iconUrl}
      />
      <CardCryptoPriceLink
        url={cryptos[4].coinrankingUrl}
        name="BNB"
        rank={cryptos[4].rank}
        price={cryptos[4].price}
        icon={cryptos[4].iconUrl}
      />
      <CardCryptoPriceLink
        url={cryptos[5].coinrankingUrl}
        name="XRP"
        rank={cryptos[5].rank}
        price={cryptos[5].price}
        icon={cryptos[5].iconUrl}
      />
    </div>
  );
};

export default HomeBottom;
