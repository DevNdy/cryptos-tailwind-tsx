import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarLeftMenu: React.FC = () => {
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
        <li className={liStyle} onClick={() => toRoute("/classement")}>
          Classement
        </li>
        <li className={liStyle} onClick={() => toRoute("/marketcap")}>
          MarketCap
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLeftMenu;
