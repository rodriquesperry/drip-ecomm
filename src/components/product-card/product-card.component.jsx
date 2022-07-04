import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";

import { CartItemContext } from "../../context/cart-item.context";
import { ProductContext } from "../../context/product.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartItemContext);
  const { showDetailsPage } = useContext(ProductContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <Link className="title" to={`product-detail/${id}`}>
        <img
          src={imageUrl}
          alt={`${name}`}
          onClick={() => {
            showDetailsPage(product);
          }}
        />
      </Link>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
