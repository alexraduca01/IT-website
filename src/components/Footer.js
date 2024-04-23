// react imports
import React from "react";
import { Link } from "react-router-dom";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileScreenButton,
  faEnvelope,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const contacts = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      body: "professionalmail@mail.com",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
      body: "+39 333 333 3333",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      body: "1719 Ashford St",
    },
  ];

  const socials = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      body: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faFacebook} />,
      body: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faXTwitter} />,
      body: "Twitter",
      url: "https://twitter.com/",
    },
  ];

  const footerlinks = [
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
    <footer className="bg-neutral-900 w-full">
      {/* left section  */}
      <div className="w-1/2 m-auto flex justify-between text-white">
        <div>
          <h2 className="text-3xl m-0 mt-4 text-center">Get in touch</h2>
          <ul className="flex flex-col gap-3 my-5">
            {contacts.map((el) => (
              <li
                key={el.id}
                className={`flex items-center gap-3 hover:text-blue-500 transition duration-300 ease-linear border-b border-neutral-700 pb-3 ${
                  el.id === 1 ? "border-t pt-3" : ""
                }`}
              >
                <i>{el.icon}</i>
                <span>{el.body}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-3xl m-0">Socials</h2>
          <ul className="my-5 flex flex-col gap-5">
            {socials.map((el) => (
              <li key={el.id}>
                <a
                  href={el.url}
                  className={`flex items-center gap-3 hover:text-blue-500 transition duration-300 ease-linear border-b border-neutral-700 pb-3 ${
                    el.id === 1 ? "border-t pt-3" : ""
                  }`}
                >
                  <i>{el.icon}</i>
                  <span>{el.body}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* center section  */}
        <div>
          <h2 className="text-3xl m-0 mt-4 text-center">
            Come and have a coffee with us
          </h2>
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2146.9435837787055!2d-157.87795820255826!3d21.330120705456736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e61b2f3459d%3A0x9f406e7a8a5190b!2s1719%20Ashford%20St%2C%20Honolulu%2C%20HI%2096819%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1713880988903!5m2!1sit!2sit"
              width="450"
              height="350"
              style={{border: "0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mt-10"
            ></iframe>
          </div>
        </div>
        {/* right section  */}
        <div className="flex flex-col">
          <h2 className="text-3xl m-0 mt-4 text-center">Quick Links</h2>
          <ul className="my-5 flex flex-col gap-5">
            {footerlinks.map((el) => (
              <li key={el.id}>
                <Link
                  to={el.url}
                  className="hover:text-blue-500 transition duration-300 ease-linear"
                >
                  <h2
                    className={`border-b border-neutral-700 pb-3 text-2xl text-center ${
                      el.id === 1 ? "border-t pt-3" : ""
                    }`}
                  >
                    {el.name}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10">Copyright © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
