// import vari
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ navlinks, closeSidebar, sidebarOpen }) => {
  return (
    <aside
      className={`flex h-screen absolute bg-stone-50 flex-col items-center justify-center gap-3 overflow-hidden z-20 ${
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
        <img
          src="https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
          alt="logo"
          className="w-32"
        />
        <ul>
          {navlinks.map((link) => (
            <li key={link.id} className="text-center py-5">
              <Link
                to={link.url}
                className="text-xl transition ease-linear hover:text-blue-500 duration-300"
                onClick={() => {
                  closeSidebar();
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
