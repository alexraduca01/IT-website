// react imports
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// component imports
import Sidebar from "./Sidebar";

// images imports
import Logo from "../assets/images/logo.png";

const Navbar = () => {

  let location = useLocation();
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navlinks = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About Us",
      url: "/about",
    },
    {
      id: 3,
      name: "Our Products",
      url: "/products",
    },
    {
      id: 4,
      name: "Our Team",
      url: "/team",
    },
    {
      id: 5,
      name: "Portfolio",
      url: "/portfolio",
    },
  ];

  return (
    <nav style={{ height: "80px" }} className="bg-neutral-900 flex flex-col justify-center">
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} navlinks={navlinks} />
      <div className="flex justify-between items-center px-5 py-2">
        <Link to="/">
          <img
            src={Logo}
            className="h-8 sm:h-16"
            alt="logo"
          />
        </Link>
        <div className="sm:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openSidebar}
            className="text-white hover:text-blue-500 transition ease-linear duration-300 text-xl cursor-pointer"
          />
        </div>
        <ul className="list-none hidden sm:flex gap-2 sm:gap-5">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={`text-sm sm:text-xl  transition ease-linear hover:text-blue-500 duration-300 ${
                  link.url === location.pathname ? "text-blue-500" : "text-white"
                } `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
