import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import Category from "../../routes/category/category.component";
import ProductDetail from "../product-detail/product-detail.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":categoty/product-detail/*" element={<ProductDetail />} />
    </Routes>
  );
};

export default Shop;
