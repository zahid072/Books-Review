import React from "react";
import Nav from "../pages/Shared/NavBar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div className="max-w-7xl md:mx-auto mx-2">
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
