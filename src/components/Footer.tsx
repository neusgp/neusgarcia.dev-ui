import React from "react";

export const Footer = () => {
  return (
    <div className="px-2 flex justify-end text-[11px]">
      <p className="py-1">
        <a
          href="https://github.com/neusgp/neusgarcia.dev-ui"
          className="font-bold hover:text-[#ce63ff] transition"
        >
          This site
        </a>{" "}
        is developed with React, Tailwind and Strapi (and love oc ✨).
      </p>
    </div>
  );
};
