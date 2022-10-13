import React from "react";

interface CardCryptoPriceLinkProps {
  url: string;
  rank: string;
  price: number;
  name: string;
  icon: string;
}

const CardCryptoPriceLink: React.FC<CardCryptoPriceLinkProps> = ({
  url,
  rank,
  price,
  name,
  icon,
}) => {
  return (
    <a
      className="flex flex-row items-center bg-fuchsia-50 h-[40px] pl-2 pr-2 text-slate-900 rounded-lg hover:scale-105 duration-700"
      href={url}
      target="_blank"
      rel=" noopener noreferrer"
    >
      <h3>{rank}</h3>
      <img className="h-[20px] mr-1 ml-1" src={icon} alt={name} />
      <p>
        {name}: <span className="text-orange-400">{Math.round(price * 100) / 100}$</span>{" "}
      </p>
    </a>
  );
};

export default CardCryptoPriceLink;
