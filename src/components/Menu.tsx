import React from "react";
import { Link } from "react-router-dom";
import { MenuLink } from "../lib/types";

export const Menu = ({ menuLinks }: { menuLinks: MenuLink[] }) => {
  return (
    <div className="flex flex-row space-x-6 md:space-x-10">
      {menuLinks.map((i) => {
        return (
          <div key={i.path} className="flex items-center">
            <Link to={i.path}>
              <p className="hover:text-[#ce63ff] transition">{i.label}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
