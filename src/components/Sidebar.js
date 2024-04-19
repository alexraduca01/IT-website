import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ navlinks, closeSidebar }) => {
    const [active, setActive] = useState("/");

    const handleActive = (url) => {
      setActive(url);
    }

  return (
    <aside className="w-full h-screen absolute bg-stone-50 flex flex-col items-center justify-center gap-3 p-2">
      <button className="absolute top-5 right-10 text-3xl border rounded px-3 py-1 bg-stone-50 text-red-600 hover:bg-gray-200 hover:text-black transition ease-linear duration-300" onClick={closeSidebar}><FontAwesomeIcon icon={faXmark} /></button>
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
              className={`text-xl transition ease-linear hover:text-blue-500 duration-300 ${
                active === link.url ? "text-blue-500" : ""
              } `}
              onClick={() => {
                handleActive(link.url);
                closeSidebar();
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
