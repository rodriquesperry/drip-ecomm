import { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext({
  product: {},
  showDetailsPage: () => {},
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});

  const showDetailsPage = (product) => {
    setProduct(product);
    console.log(product);
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
