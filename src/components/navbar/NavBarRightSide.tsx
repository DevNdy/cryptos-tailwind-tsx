import React from "react";

const NavBarRightSide: React.FC = () => {
  const date = new Date();
  const options: {} = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };

  return (
    <div className="h-full flex flex-row items-center mr-20">
      <p className="text-orange-400 flex flex-col items-center">
        CryptoFinance
        <span className="text-white font-light text-xs italic ">
          {date.toLocaleDateString("fr-FR", options)}
        </span>
      </p>
    </div>
  );
};

export default NavBarRightSide;
