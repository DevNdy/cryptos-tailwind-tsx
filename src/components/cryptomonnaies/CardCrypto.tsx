import React from "react";

interface CardCryptoProps {
  name: string;
  rank: number;
  icon: string;
  symbol: string;
  price: number;
  url: string;
}

const CardCrypto: React.FC<CardCryptoProps> = ({ name, rank, icon, symbol, price, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel=" noopener noreferrer"
      className={`w-[650px] flex flex-row justify-between bg-slate-100 mt-4 p-2 rounded-md hover:scale-[1.03] duration-700 m-3 `}
    >
      <div className="w-[200px] flex flex-row items-center">
        <h4>{rank}</h4>
        <img src={icon} alt="crypto" className="ml-2 mr-2 h-6" />
        <h4>{name}</h4>
      </div>
      <h4>{symbol}</h4>
      <h4 className="w-[100px] text-end text-orange-400">{Math.round(price * 100) / 100}$</h4>
    </a>
  );
};

export default CardCrypto;
