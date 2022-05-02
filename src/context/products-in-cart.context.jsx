import { createContext, useState, useEffect } from "react";


export const ProductsInCartContext = createContext({
  products: [],
});

export const ProductsInCartProvider = ({ children }) => {

  const [products, setProducts] = useState();
  const value = { products };

  return (
    <ProductsInCartContext.Provider value={value}>{children}</ProductsInCartContext.Provider>
  );
};