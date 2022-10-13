import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface ChartBitcoinProps {
  timestamp: number;
  price: string;
}

const ChartBitcoin = () => {
  let heure = new Date().getHours();
  console.log(heure);

  const [bitcoin, setBitcoin] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "1h" },
      headers: {
        "X-RapidAPI-Key": "f00c50b32amsh870af7005927c13p198a37jsn6cf946d213f5",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setBitcoin(response.data.data.history);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-[54%] w-[95%] mt-12 shadow-inner p-3 rounded-md bg-white">
      <Line
        datasetIdKey="id"
        data={{
          labels: bitcoin
            .map(
              (e: ChartBitcoinProps) =>
                ` ${
                  new Date(e.timestamp * 1000).getHours() +
                  ":" +
                  new Date(e.timestamp * 1000).getMinutes()
                }`
            )
            .reverse(),
          datasets: [
            {
              label: "Btc - Graph 1h",
              data: bitcoin.map((e: ChartBitcoinProps) => e.price).reverse(),
              borderColor: "orange",
              backgroundColor: "white",
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartBitcoin;
