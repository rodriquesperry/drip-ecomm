import { useState } from "react";

import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
