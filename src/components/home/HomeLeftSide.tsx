import React from "react";

const HomeLeftSide: React.FC = () => {
  return (
    <article className="flex flex-col items-center text-gray-100 ml-20">
      <h2 className="text-3xl mb-5">Bienvenue investisseurs,</h2>
      <h4 className="text-xl mb-4">La crypto c'est quoi?</h4>
      <p className="italic font-light">
        En résumé, la cryptomonnaie est une forme d’argent qui n'existe que sur Internet. La plupart
        des cryptomonnaies sont générées par ce qu’on appelle une “blockchain” (chaîne de blocs).
        Imaginez qu’une blockchain est similaire à un registre de transactions stockées sur une
        foule d’ordinateurs différents dans le monde entier, lesquels actualisent constamment ce
        registre. Chaque ordinateur, ou machine, est appelé noeud (ou node), et vérifie constamment
        que sa version du registre est similaire à celle des autres. Ainsi, toute tentative
        d’altération ou modification malhonnête est facilement détectée et supprimée.
      </p>
    </article>
  );
};

export default HomeLeftSide;
