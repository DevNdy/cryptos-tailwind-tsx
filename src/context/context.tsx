import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type ContextType = {
  cryptos: any;
  nbrCoins: number;
  setNbrCoins: (newState: number) => void;
  fetchCryptos: () => void;
};

const initialValue = {
  cryptos: [],
  nbrCoins: 20,
  setNbrCoins: () => {},
  fetchCryptos: () => {},
};

export const AppContext = createContext<ContextType>(initialValue);

export function AppContextProvider({ children }: Props) {
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

  return (
    <AppContext.Provider value={{ cryptos, nbrCoins, setNbrCoins, fetchCryptos }}>
      {children}
    </AppContext.Provider>
  );
}
