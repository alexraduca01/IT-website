// import vari
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("/");

  // funzione che mi permette di settare il link attivo a livello di interfaccia
  const handleActive = (url) => {
    setActive(url);
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
      name: "Contacts",
      url: "/contacts",
    },
  ];

  return (
    <nav>
      <div className="flex justify-between items-center px-3 py-2 bg-stone-50">
        <img
          src="https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
          className="w-24"
          alt="logo"
        />
        <ul className="list-none flex gap-5">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={`text-xl transition ease-linear hover:text-blue-500 duration-300 ${
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
