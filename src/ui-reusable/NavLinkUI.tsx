import React from "react";
import { LinkProps, NavLink } from "react-router-dom";

interface NavLinkProps extends Omit<LinkProps, "className" | "style" | "to"> {
  className: string;
  to: string;
}

const NavLinkUI: React.FC<NavLinkProps> = ({ to, title, onClick, className }) => {
  return (
    <NavLink onClick={onClick} to={to} className={className}>
      {title}
    </NavLink>
  );
};

export default NavLinkUI;
