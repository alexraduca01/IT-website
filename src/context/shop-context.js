// react imports
import React, { createContext, useState } from "react";

// data imports
import {PRODUCTS} from "../data/Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getSubtotal = () => {
    let total = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return total;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };

  const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getSubtotal};

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
