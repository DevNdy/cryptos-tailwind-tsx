import React from "react";

const CalculMC = () => {
  const styleInput = "border border-solid w-[480px] mr-9 ml-5 pl-1 rounded-lg";

  return (
    <div className="bg-white mt-20 w-[1000px] p-2">
      <h3 className="ml-6">Calculer le Market Cap d'une cryptomonnaie:</h3>
      <form className="flex flex-row w-full mt-3 ">
        <input className={styleInput} type="number" placeholder="nombre de token en circulation?" />
        <input className={styleInput} type="number" placeholder="prix du token?" />
        <button className="bg-orange-400 text-white pl-5 pr-5 rounded-md">calculer</button>
      </form>
    </div>
  );
};

export default CalculMC;
