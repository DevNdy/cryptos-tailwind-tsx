import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../../context/context";
import CardCrypto from "./CardCrypto";

const CryptoList: React.FC = () => {
  const { cryptos, searchCrypto, fetchCryptos } = useContext(AppContext);

  return (
    <div className="pb-4 mt-5">
      <InfiniteScroll
        dataLength={cryptos.length}
        next={fetchCryptos}
        hasMore={true}
        loader={<p className=" text-center mt-4 italic text-orange-300">Chargement...</p>}
      >
        {cryptos
          .filter(
            (f: any) =>
              f.name.toLowerCase().startsWith(searchCrypto.toLowerCase()) ||
              f.symbol.toLowerCase().startsWith(searchCrypto.toLowerCase())
          )
          .map((e: any) => (
            <CardCrypto
              key={e.uuid}
              name={e.name}
              rank={e.rank}
              icon={e.iconUrl}
              url={e.coinrankingUrl}
              price={e.price}
              symbol={e.symbol}
            />
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default CryptoList;
