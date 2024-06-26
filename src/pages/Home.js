// react imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// react-spring imports
import { useInView, animated } from "@react-spring/web";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

// swiper dependencies imports
import { FreeMode, Autoplay } from "swiper/modules";

// swiper styles

import "swiper/css";
import "swiper/css/free-mode";

// components imports
import Hero from "../components/home-components/Hero";
import Form from "../components/home-components/Form";

// images imports
import WorkImg from "../assets/images/work.jpg";
import ReliableImg from "../assets/images/reliable.jpg";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPopupOpen) {
        closePopup();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPopupOpen]);

  return (
    <>
      <Hero />
      {/* About us section */}
      <AboutSection />
      {/* motivational section */}
      <MotivationalSection />
      {/* technologies section */}
      <TechnologiesSection />
      {/* form section */}
      <FormSection openPopup={openPopup} />
      {/* popup */}
      <div
        className={`shadow rounded-xl fixed top-5 left-5 z-30 p-5 bg-white border-b border-green-500 ${
          isPopupOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.3s linear" }}
      >
        Message sent successfully !{" "}
        <span
          onClick={closePopup}
          className="ms-5 text-xl cursor-pointer text-red-500 hover:text-red-300 transition duration-300"
        >
          x
        </span>
      </div>
    </>
  );
};

const AboutSection = () => {
  const [ref, springs] = useInView(() => ({
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0 },
  }));

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full p-10">
      <animated.div
        ref={ref}
        style={springs}
        className="w-full lg:w-4/5 m-auto flex flex-col 2xl:flex-row gap-2 md:gap-4 xl:gap-10 justify-between bg-slate-100 shadow"
      >
        <div className="w-full 2xl:w-1/2">
          <img src={WorkImg} alt="working for you" className="w-full shadow" />
        </div>
        <div className="w-full 2xl:w-1/2 px-10 flex flex-col gap-y-2 2xl:gap-y-0  justify-evenly">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Our Mission</h2>
          <p className=" lg:text-xl">
            IT Website, your go-to for IT solutions. We specialize in website
            development, printing services, and PC sales/repairs. With a focus
            on innovation and customer satisfaction, our expert team delivers
            tailored solutions to elevate your digital presence.{" "}
            <span
              onClick={() => scrollTo("contactForm")}
              className="cursor-pointer text-blue-500 underline"
              style={{ scrollBehavior: "smooth" }}
            >
              Contact us
            </span>{" "}
            today to unlock the power of technology for your success.
          </p>
          <Link
            to="/about"
            className="py-3 lg:py-5 flex justify-center 2xl:justify-start"
          >
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Show More
            </button>
          </Link>
        </div>
      </animated.div>
    </section>
  );
};

const MotivationalSection = () => {
  const [ref, springs] = useInView(() => ({
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0 },
  }));

  return (
    <section className="w-full p-10 bg-slate-200">
      <animated.div
        ref={ref}
        style={springs}
        className="w-full lg:w-4/5 m-auto flex flex-col-reverse gap-3 md:gap-4 2xl:flex-row xl:gap-10 justify-between bg-slate-100 shadow"
      >
        <div className="w-full 2xl:w-1/2 px-10 flex flex-col justify-evenly">
          <h2 className="text-xl mg:text-2xl lg:text-3xl">Why choose us ?</h2>
          <div>
            <ol className="py-2 md:py-4 2xl:py-0 lg:text-xl list-decimal px-5">
              <li>
                <strong>Expertise:</strong> <br/> Benefit from our experienced
                professionals.
              </li>
              <li>
                <strong>Comprehensive Solutions:</strong> <br/> Benefit from our
                experienced professionals.
              </li>
              <li>
                <strong>Quality Assurance:</strong> <br/> Benefit from our experienced
                professionals.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> <br/> Benefit from our
                experienced professionals.
              </li>
              <li>
                <strong>Reliability:</strong> <br/> Benefit from our experienced
                professionals.
              </li>
              <li>
                <strong>Commitment to Excellence:</strong> <br/> Benefit from our
                experienced professionals.
              </li>
            </ol>
            <p className="py-2 md:py-4 2xl:py-4 lg:text-xl">Choose IT Website for expertise, comprehensive solutions, and exceptional service.</p>
          </div>
        </div>
        <div className="w-full 2xl:w-1/2">
          <img
            src={ReliableImg}
            alt="Why choose us"
            className="w-full shadow"
          />
        </div>
      </animated.div>
    </section>
  );
};

const TechnologiesSection = () => {
  const [ref, springs] = useInView(() => ({
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0 },
  }));

  const swiperSlides = [
    {
      id: 1,
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 2,
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 4,
      name: "MySql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      id: 5,
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      id: 6,
      name: "VueJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      id: 7,
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 8,
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      id: 9,
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      id: 10,
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  return (
    <section className="w-full p-10">
      <animated.div
        ref={ref}
        style={springs}
        className="w-full lg:w-4/5 m-auto bg-slate-100 shadow py-20"
      >
        <div className="pb-10">
          <h2 className="text-3xl text-center">Technologies we use</h2>
        </div>
        <div className="w-full px-3 lg:px-0 lg:w-4/5 m-auto pt-10">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {swiperSlides.map((el) => (
              <SwiperSlide key={el.id}>
                <img
                  className="w-32 lg:w-60 lg:drop-shadow-xl"
                  src={el.icon}
                  alt={el.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </animated.div>
    </section>
  );
};

const FormSection = ({ openPopup }) => {
  const [ref, springs] = useInView(() => ({
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0 },
  }));

  return (
    <section className="w-full bg-slate-200 p-10">
      <animated.div
        ref={ref}
        style={springs}
        className="w-full lg:w-4/5 m-auto bg-slate-100 pb-10 px-8 shadow"
      >
        <div className="py-5 lg:py-10">
          <h2 className="md:text-2xl lg:text-3xl text-center">
            Complete the form or contact us
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <Form openPopup={openPopup} />
          <div className="w-full lg:w-1/2 lg:ps-10 flex flex-col justify-evenly">
            <div className="my-5 lg:mb-10 bg-white p-5 rounded-xl shadow">
              <p className="text-xl mb-5">Call us</p>
              <a
                href="tel:+393333333333"
                className="lg:text-3xl text-green-700 hover:text-green-300 transition duration-150 ease-linear"
              >
                +39 333 333 3333
              </a>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-xl mb-5">Or send us an email</p>
              <a
                href="mailto:professionalmail@mail.com"
                className="lg:text-3xl text-green-700 hover:text-green-300 transition duration-150 ease-linear"
              >
                professionalmail@mail.com
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Home;
