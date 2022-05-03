import { createContext, useState, useEffect } from "react";


export const CartItemContext = createContext({
  cartItems: [],
});

export const CartItemProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState();
  const value = { cartItems };

  return (
    <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
  );
};