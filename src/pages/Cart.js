// react imports
import React, { useContext } from "react";

// components imports
import { PRODUCTS } from "../data/Products";
import CartItem from "../components/shop-components/CartItem";

// context import
import { ShopContext } from "../context/shop-context";


const Cart = () => {
  const { cartItems, getSubtotal } = useContext(ShopContext);
  const totalAmount = getSubtotal();

  return (
    <div>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      {/* cart items  */}
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem {...product} />;
          }
        })}
      </div>
      {/* checkout */}
      {totalAmount > 0 ? (
        <div>
          <p>Subtotal: {totalAmount}€</p>
          <button>Continue shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        "Your cart is empty."
      )}
    </div>
  );
};

export default Cart;
