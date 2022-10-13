import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const SearchCrypto = () => {
  const { searchCrypto, setSearchCrypto } = useContext(AppContext);

  return (
    <div className="mt-8 w-[650px] h-[30px] flex flex-row items-center border-solid border-2 border-white-600 rounded-lg">
      <i className="fa-solid fa-magnifying-glass text-orange-400 mr-2 ml-2"></i>
      <input
        value={searchCrypto}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchCrypto(e.target.value)}
        className="w-full h-[26px] pl-1 rounded-sm"
        type="text"
        placeholder="Rechercher une cryptomonnaie..."
      />
    </div>
  );
};

export default SearchCrypto;
