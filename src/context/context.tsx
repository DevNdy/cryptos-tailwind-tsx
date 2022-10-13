import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type ContextType = {
  isSelect: number;
  setIsSelect: (newState: number) => void;
  cryptos: any;
  nbrCoins: number;
  setNbrCoins: (newState: number) => void;
  fetchCryptos: () => void;
  searchCrypto: string;
  setSearchCrypto: (newState: string) => void;
};

const initialValue = {
  isSelect: 0,
  setIsSelect: () => {},
  cryptos: [],
  nbrCoins: 20,
  setNbrCoins: () => {},
  fetchCryptos: () => {},
  searchCrypto: "",
  setSearchCrypto: () => {},
};

export const AppContext = createContext<ContextType>(initialValue);

export function AppContextProvider({ children }: Props) {
  //Nav:
  const [isSelect, setIsSelect] = useState(0);

  //cryptos:
  const [cryptos, setCryptos] = useState<any>(initialValue.cryptos);
  const [nbrCoins, setNbrCoins] = useState(initialValue.nbrCoins);

  useEffect(() => {
    fetchCryptos();
  }, []);

  const fetchCryptos = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: `${nbrCoins}`,
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "f00c50b32amsh870af7005927c13p198a37jsn6cf946d213f5",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        setCryptos([...response.data.data.coins]);
        setNbrCoins(nbrCoins + 5);
        console.log(cryptos);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //search:
  const [searchCrypto, setSearchCrypto] = useState("");

  return (
    <AppContext.Provider
      value={{
        isSelect,
        setIsSelect,
        cryptos,
        nbrCoins,
        setNbrCoins,
        fetchCryptos,
        searchCrypto,
        setSearchCrypto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
