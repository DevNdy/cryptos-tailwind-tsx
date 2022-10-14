import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { AppContext } from "../../context/context";

const DoughnutMarketCap: React.FC = () => {
  const { cryptos } = useContext(AppContext);
  return (
    <div className="h-[450px] w-[400px]  bg-slate-100 flex flex-col items-center justify-center rounded-2xl ">
      <h2>
        MarketCap du top 5 <span>en $</span>
      </h2>
      <Doughnut
        datasetIdKey="id"
        data={{
          labels: ["BTC", "ETH", "USDT", "USDC", "BNB"],
          datasets: [
            {
              label: "marketCap",
              data: cryptos
                .filter(
                  (f: any) =>
                    f.name === "Bitcoin" ||
                    f.name === "Ethereum" ||
                    f.name === "Tether USD" ||
                    f.name === "USDC" ||
                    f.name === "Binance Coin"
                )
                .map((e: any) => e.marketCap),
              borderColor: "white",
              backgroundColor: cryptos
                .filter(
                  (f: any) =>
                    f.name === "Bitcoin" ||
                    f.name === "Ethereum" ||
                    f.name === "Tether USD" ||
                    f.name === "USDC" ||
                    f.name === "Binance Coin"
                )
                .map((e: any) => e.color),
              hoverOffset: 7,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutMarketCap;
