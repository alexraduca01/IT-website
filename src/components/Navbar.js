// import vari
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import componenti
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // funzione che mi permette di settare il link attivo a livello di interfaccia
  const handleActive = (url) => {
    setActive(url);
  };

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
  ];

  return (
    <nav style={{ height: "80px" }}>
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} navlinks={navlinks} />
      <div className="flex justify-between items-center px-3 py-2 bg-stone-50">
        <Link to="/">
          <img
            src="https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
            className="w-12 sm:w-24"
            alt="logo"
          />
        </Link>
        <div className="sm:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openSidebar}
            className="hover:text-blue-500 transition ease-linear duration-300 text-xl cursor-pointer"
          />
        </div>
        <ul className="list-none hidden sm:flex gap-2 sm:gap-5">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={`text-sm sm:text-xl transition ease-linear hover:text-blue-500 duration-300 ${
                  active === link.url ? "text-blue-500" : ""
                } `}
                onClick={() => handleActive(link.url)}
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
