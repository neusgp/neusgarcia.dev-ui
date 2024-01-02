import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { MenuLink } from "../lib/types";

export const Header = ({
  logo,
  menuLinks,
}: {
  logo: string;
  menuLinks: MenuLink[];
}) => {
  return (
    <div className="flex justify-between py-3 px-4 bg-gradient-to-r from-pink-100 to-orange-100">
      <Logo logo={logo} />
      <Menu menuLinks={menuLinks} />
    </div>
  );
};

const Logo = ({ logo }: { logo: string }) => {
  //TODO: should this be a h1?
  return (
    <div>
      <Link to="/">
        <h1 className="hover:text-[#d37afd] transition">{logo}</h1>
      </Link>
    </div>
  );
};
