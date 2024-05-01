// react imports
import React, { useContext } from "react";

// context imports
import { ShopContext } from "../../context/shop-context";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { id, image, title, price } = props;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

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
      <div className="flex justify-between items-center py-3">
        <div>
          <h2 className="sm:text-base cursor-pointer">
            {title.substr(0, 20)}
          </h2>
          <p className="sm:text-base cursor-pointer">{price}€</p>
        </div>
        <div className="relative">
          <button
            onClick={() => addToCart(id)}
            className="bg-green-500 p-1 px-2 hover:bg-green-400 text-white border-b-4 border-green-700 hover:border-green-500 rounded"
          >
            Add to cart
          </button>
          {cartItemAmount > 0 ? (
            <p className="absolute -top-2 right-1 size-5 rounded-full bg-red-500 text-white leading-5 text-sm text-center">{cartItemAmount}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
