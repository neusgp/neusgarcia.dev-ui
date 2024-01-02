import React from "react";
import { Link } from "react-router-dom";
import { MenuLink } from "../lib/types";

export const Menu = ({ menuLinks }: { menuLinks: MenuLink[] }) => {
  return (
    <div className="flex flex-row space-x-10">
      {menuLinks.map((i) => {
        return (
          <div key={i.path} className="hover">
            <Link to={i.path}>
              <p className="hover:text-[#d37afd] transition">{i.label}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
