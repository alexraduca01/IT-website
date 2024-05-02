// react imports
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// style imports
import "./pages-style/Checkout.css";

// context import
import { ShopContext } from "../context/shop-context";

// data imports
import { PRODUCTS } from "../data/Products";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getSubtotal, clearCart } = useContext(ShopContext);

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      clearCart();
      navigate("/shop");
    }, 5000);
    return () => clearTimeout(navigationTimeout);
  }, []);

  return (
    <div className="min-height-fix bg-slate-200 flex flex-col justify-center items-center gap-10">
      <h1 className="text-center text-3xl py-10">Thanks for your order</h1>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="grid grid-cols-3 gap-2">
          {PRODUCTS.map((el) => {
            if (cartItems[el.id] > 0) {
              return (
                <div className="flex gap-5 bg-white shadow-md p-3">
                  <img className="size-20" src={el.image} alt={el.title} />
                  <div>
                    <p>{el.title.substr(0, 20)}</p>
                    <p>Quantity: {cartItems[el.id]}</p>
                  </div>
                </div>
              );
            }
          })}
          <p>Total: {getSubtotal().toFixed(2)}€</p>
        </div>
      </div>
      <div className="size-20 check-container flex justify-center items-center">
        <FontAwesomeIcon icon={faCheck} className="text-green-500" />
      </div>
    </div>
  );
};

export default Checkout;
