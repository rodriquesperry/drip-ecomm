import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
  product: {},
  showDetailsPage: () => {},
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});

  const showDetailsPage = (product) => {
    setProduct(product);
    return product;
  };

  const value = {
    product,
    showDetailsPage,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
