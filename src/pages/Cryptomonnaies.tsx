import React from "react";
import InfosCryptomonnaies from "../components/cryptomonnaies/InfosCryptomonnaies";
import SearchCrypto from "../components/cryptomonnaies/SearchCrypto";

const Cryptomonnaies = () => {
  return (
    <div className="h-[100vh] bg-slate-900 flex flex-col items-center">
      <InfosCryptomonnaies />
      <SearchCrypto />
    </div>
  );
};

export default Cryptomonnaies;
