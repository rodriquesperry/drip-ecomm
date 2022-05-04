import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartItemContext = createContext({
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  decrementCartItemQuantity: () => {},
  removeItemFromCheckout: () => {},
  cartTotal: 0,
});

export const CartItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    let newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
    console.log(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    console.log(cartItems);
  };

  const decrementCartItemQuantity = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
          ? {
              ...cartItem,
              quantity: Math.max(1, cartItem.quantity - 1),
            }
          : cartItem
      );
    }
    return [...cartItems];
  };

  const decrementItemQuantity = (productToRemove) => {
    setCartItems(decrementCartItemQuantity(cartItems, productToRemove));
    console.log(cartItems);
  };

  const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );

    const indexOfCartItem = cartItems.indexOf(existingCartItem);
    const newCartItems = cartItems.splice(indexOfCartItem, 1);
    if (cartItems.length >= 0) {
      return [...cartItems];
    }

    setCartItems(newCartItems);
    console.log(cartItems);
  };

  const removeItemFromCheckout = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    cartItems,
    addItemToCart,
    cartCount,
    decrementItemQuantity,
    removeItemFromCheckout,
    cartTotal,
  };

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
