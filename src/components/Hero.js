// import vari
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import immagini
import HardwareImg from "../assets/images/hardware.jpg";
import PrinterImg from "../assets/images/printer.jpg";
import WebDevImg from "../assets/images/webdev.jpg";

// import dipendenze swiper
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  const swiperSlides = [
    {
      id: 1,
      body: "Technical Support/Sales for PCs",
      thumb: HardwareImg,
    },
    {
      id: 2,
      body: "Printer Technical Support/Sales and Rental",
      thumb: PrinterImg,
    },
    {
      id: 3,
      body: "Web Development and Maintenance Services",
      thumb: WebDevImg,
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {swiperSlides.map((el) => (
          <div key={el.id}>
            <SwiperSlide className="relative">
              <img
                src={el.thumb}
                alt={el.body}
                className="object-center object-cover w-full m-auto "
              />
              <div className="absolute top-1/2 left-1/2 w-full h-full z-10 flex gap-7 justify-center items-center flex-col bg-black/25 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-4xl font-bold text-white">{el.body}</h2>
                <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Contact Us
                </a>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
