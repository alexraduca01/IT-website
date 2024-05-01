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
    <div className="w-full bg-slate-100 my-10 py-5">
      <div className="w-4/5 m-auto">
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
            <p>Subtotal: {totalAmount.toFixed(2)}€</p>
            <div className="flex justify-center gap-3 py-5">
              <Link to="/shop" className="bg-blue-500 p-1 px-2 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="bg-blue-500 p-1 px-2 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded">
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
