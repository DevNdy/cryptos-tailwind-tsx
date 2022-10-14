import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/context";

const CalculMC = () => {
  const { result, setResult } = useContext(AppContext);

  const [nbrToken, setNbrToken] = useState<number>(0);
  const [priceToken, setPriceToken] = useState<number>(0);

  function handleSubmitCalcule(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(nbrToken * priceToken);
    console.log(result);
  }

  //style:
  const styleInput = "border border-solid w-[240px] mr-9 ml-5 pl-1 rounded-lg";
  const styleLabel = "ml-5";

  return (
    <div className="bg-slate-100 mt-20 w-[1000px] p-2 rounded-lg">
      <h3 className="ml-6 text-orange-600">Calculer le Market Cap d'une cryptomonnaie:</h3>
      <form onSubmit={handleSubmitCalcule} className="flex flex-row items-end w-full mt-3 ">
        <div>
          <label className={styleLabel} htmlFor="nbrToken">
            nombre de token en circulation?
          </label>
          <input
            id="nbrToken"
            value={nbrToken}
            onChange={(e) => setNbrToken(Number(e.target.value))}
            className={styleInput}
            type="number"
            placeholder="nombre de token en circulation?"
          />
        </div>
        <div>
          <label className={styleLabel} htmlFor="priceToken">
            prix du token?
          </label>
          <input
            id="priceToken"
            value={priceToken}
            onChange={(e) => setPriceToken(Number(e.target.value))}
            className={styleInput}
            type="number"
            placeholder="prix du token?"
          />
        </div>
        <button className="h-6 bg-orange-400 text-white pl-5 pr-5 rounded-md">calculer</button>
      </form>
    </div>
  );
};

export default CalculMC;
