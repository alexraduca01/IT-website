// react imports
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// images imports
import Logo from "../assets/images/logo.png";

const Sidebar = ({ navlinks, closeSidebar, sidebarOpen }) => {

  const location = useLocation();

  return (
    <aside
      className={`flex h-screen fixed top-0 left-0 bg-stone-50 flex-col items-center justify-center gap-3 z-50 ${
        sidebarOpen ? "w-full p-2" : "w-0 p-0"
      }`}
      style={{ transition: "width 0.3s linear" }}
    >
      <div className={sidebarOpen ? "" : "hidden"}>
        <button
          className="absolute top-5 right-10 text-3xl rounded px-3 py-1 hover:text-red-600 text-black transition ease-linear duration-300"
          onClick={closeSidebar}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <Link to="/">
          <img
            src={Logo}
            className="w-20 m-auto"
            alt="logo"
          />
        </Link>
        <ul>
          {navlinks.map((link) => (
            <li key={link.id} className="text-center py-5">
              <Link
              
                to={link.url}
                className={`text-xl transition ease-linear hover:text-blue-500 duration-300 ${link.url === location.pathname ? 'text-blue-500' : 'text-black'}`}
                onClick={() => {
                  closeSidebar();
                  window.scrollTo(0, 0);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
