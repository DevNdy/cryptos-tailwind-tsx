import React from "react";

const DescriptionMC: React.FC = () => {
  return (
    <p className="w-[500px] text-gray-100 ml-[100px]">
      Le <em>« Market Cap »</em> d’une cryptomonnaie s’obtient en multipliant le dernier prix auquel
      cette crypto s’est échangée par le nombre de tokens en circulation. <br /> <br /> Ainsi une
      crypto dont la dernière valeur d’échange serait de 100€ pour un total de 10 millions de tokens
      sur le marché, affiche un « Market Cap » d’un milliard d’euros. Mais ça ne veut pas dire pour
      autant qu’un milliard d’euros supportent réellement la valeur de cette cryptomonnaie. La
      plupart des tokens n’auront probablement pas été payés 100€ et seront en partie détenus par
      les premiers investisseurs qui n’auront peut-être déboursé que quelques centimes pour les
      acquérir. La quantité d’argent réellement investi dans une cryptomonnaie est généralement très
      inférieure à son « Market Cap ».
    </p>
  );
};

export default DescriptionMC;
