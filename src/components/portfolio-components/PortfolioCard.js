// react imports
import React from "react";

// css imports
import "./PortfolioCard.css";

const PortfolioCard = (props) => {

    const { url, body, image, customer } = props;

  return (
    <>
      <div className="w-full relative card-container cursor-pointer">
        <img src={image} className="w-full" alt={customer} />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center text-white bg-black bg-opacity-70 transition-opacity ease-linear duration-200 url-container">
          <p className="text-xl">{url}</p>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center z-10 bg-black bg-opacity-70 rounded-md text-white w-4/5 customer-container">
          <h2 className="pb-2">{customer}</h2>
          <p className="text-sm">{body}</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
