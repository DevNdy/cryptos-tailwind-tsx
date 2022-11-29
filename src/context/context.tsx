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
  result: number;
  setResult: (newState: number) => void;
  numStr: any;
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
  result: 0,
  setResult: () => {},
  numStr: (a: string, b: string) => {},
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
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
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

  //function séparation unité:
  function numStr(a: string, b: string) {
    a = "" + a;
    b = b || " ";
    var c = "",
      d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = d !== 0 && d % 3 === 0 ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }

  //search:
  const [searchCrypto, setSearchCrypto] = useState("");

  //calc MC:
  const [result, setResult] = useState(initialValue.result);

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
        result,
        setResult,
        numStr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
