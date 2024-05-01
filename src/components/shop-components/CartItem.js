// react imports
import React, { useContext } from "react";

// context imports
import { ShopContext } from "../../context/shop-context";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const CartItem = (props) => {
  const { id, image, title, price } = props;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex gap-3 p-2 my-5 rounded-md shadow-lg bg-stone-200">
      <div>
        <img className="size-20" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between">
        <p>{title.substr(0, 20)}</p>
        <p>{price}€</p>
        <div className="flex">
          <button className="size-6 bg-red-500 hover:bg-red-400 text-white flex justify-center items-center" onClick={() => removeFromCart(id)}><FontAwesomeIcon icon={faMinus} className="text-sm"/></button>
          <input
            type="text"
            className="w-10 text-center"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="size-6 bg-green-500 hover:bg-green-400 text-white flex justify-center items-center" onClick={() => addToCart(id)}><FontAwesomeIcon icon={faPlus} className="text-sm"/></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
