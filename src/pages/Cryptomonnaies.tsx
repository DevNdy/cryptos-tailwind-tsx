import React from "react";
import CryptoList from "../components/cryptomonnaies/CryptoList";
import InfosCryptomonnaies from "../components/cryptomonnaies/InfosCryptomonnaies";
import SearchCrypto from "../components/cryptomonnaies/SearchCrypto";

const Cryptomonnaies: React.FC = () => {
  return (
    <div className="min-h-[100vh] bg-slate-900 flex flex-col items-center">
      <InfosCryptomonnaies />
      <SearchCrypto />
      <CryptoList />
    </div>
  );
};

export default Cryptomonnaies;
