import React, { useContext, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/context";

const NavBarLeftMenu = () => {
  const { isSelect, setIsSelect } = useContext(AppContext);
  const navigate = useNavigate();

  function toRoute(route: string) {
    navigate({
      pathname: route,
    });
  }

  const liStyle =
    "mr-[85px] relative cursor-pointer hover:underline hover:underline-offset-8] decoration-wavy tracking-wide ";

  return (
    <nav className="flex flex-row justify-between items-center w-96 h-full text-orange-400 ml-20">
      <ul className="flex flex-row">
        <li className={liStyle} onClick={() => toRoute("/")}>
          Accueil
        </li>
        <li className={liStyle} onClick={() => toRoute("/cryptomonnaies")}>
          Classement
        </li>
        <li className={liStyle} onClick={() => toRoute("/")}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLeftMenu;
