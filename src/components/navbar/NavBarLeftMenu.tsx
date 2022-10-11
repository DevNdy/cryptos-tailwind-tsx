import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinkUI from "../../ui-reusable/NavLinkUI";

const NavBarLeftMenu = () => {
  const [isSelect, setIsSelect] = useState(0);

  const styleSelect = " border-solid border-2 border-orange-400  rounded-lg pl-1 pr-1 duration-200";

  const styleNotSelect =
    "border-slate-900 border-solid border-2 hover:border-orange-400  rounded-lg pl-1 pr-1 duration-200";

  return (
    <nav className="flex flex-row justify-between items-center w-96 h-full text-orange-400 ml-20">
      <NavLinkUI
        title="Accueil"
        to="/"
        onClick={() => setIsSelect(0)}
        className={isSelect === 0 ? styleSelect : styleNotSelect}
      />
      <NavLinkUI
        title="Cryptomonnaies"
        to="/"
        onClick={() => setIsSelect(1)}
        className={isSelect === 1 ? styleSelect : styleNotSelect}
      />
      <NavLinkUI
        title="Analyses"
        to="/"
        onClick={() => setIsSelect(2)}
        className={isSelect === 2 ? styleSelect : styleNotSelect}
      />
    </nav>
  );
};

export default NavBarLeftMenu;
