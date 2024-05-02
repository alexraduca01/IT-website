// react imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// components imports
import { PRODUCTS } from "../data/Products";
import CartItem from "../components/shop-components/CartItem";

// context import
import { ShopContext } from "../context/shop-context";

const Cart = () => {
  const { cartItems, getSubtotal } = useContext(ShopContext);
  const totalAmount = getSubtotal();

  return (
    <div className="w-full py-10 bg-slate-200 min-height-fix">
      <div className="w-4/5 m-auto p-5">
        <h1 className="text-center text-3xl pb-2">Your Cart</h1>
        {/* cart items  */}
        <div className="flex flex-col justify-center items-center">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem {...product} />;
            }
          })}
        </div>
        {/* checkout */}
        {totalAmount > 0 ? (
          <div>
            <p className="text-center">Subtotal: {totalAmount.toFixed(2)}€</p>
            <div className="flex justify-center gap-3 py-5">
              <Link to="/shop" className="bg-blue-500 p-1 px-2 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => window.scrollTo(0, 0)}>
                Continue Shopping
              </Link>
              <Link to="/checkout" className="bg-blue-500 p-1 px-2 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => window.scrollTo(0, 0)}>
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="py-5">It looks like your cart is empty :(</p>
            <Link to="/shop" className="bg-blue-500 p-1 px-2 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Buy something :D
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
