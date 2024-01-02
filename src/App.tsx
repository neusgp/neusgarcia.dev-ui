import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { logo, menuLinks } from "./lib/menuLinks";

//Pages
import { Homepage } from "./pages/Homepage";
import { Post } from "./pages/Post";
import { About } from "./pages/About";

export const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-0">
        <Header logo={logo} menuLinks={menuLinks} />
      </div>

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div className="flex-0">
        <Footer />
      </div>
    </div>
  );
};
