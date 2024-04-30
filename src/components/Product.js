// react imports
import React from "react";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {

  const { id, image, title, price } = props;

  return (
    <>
      <img
        src={image}
        alt={title}
        className="aspect-square cursor-pointer w-full"
      />
      <div className="bg-white hidden rounded-full absolute top-1 right-1 size-7 border text-center leading-7">
        <FontAwesomeIcon
          icon={faHeart}
          className="cursor-pointer text-gray-500 hover:text-red-500 transition duration-300 ease-linear"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xs sm:text-base cursor-pointer">
            {title.substr(0, 20)}
          </h2>
          <p className="text-xs sm:text-base cursor-pointer">{price}€</p>
        </div>
        <div className="bg-white rounded-full size-7 border text-center leading-7">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="cursor-pointer text-gray-500 hover:text-green-500 transition duration-300 ease-linear size-4"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
