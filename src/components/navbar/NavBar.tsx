import React from "react";
import NavBarLeftMenu from "./NavBarLeftMenu";
import NavBarRightSide from "./NavBarRightSide";

const NavBar = () => {
  return (
    <header className="bg-slate-900 h-14 w-screen flex flex-row justify-between fixed ">
      <NavBarLeftMenu />
      <NavBarRightSide />
    </header>
  );
};
export default NavBar;
