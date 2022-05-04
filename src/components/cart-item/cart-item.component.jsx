import { useContext } from "react";
import { CartItemContext } from "../../context/cart-item.context";

import { ReactComponent as Remove } from "../../asstes/x.svg";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { removeItemFromCheckout } = useContext(CartItemContext);

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
        <span>
          <Remove
            onClick={() => removeItemFromCheckout(cartItem)}
            className="remove-icon"
          />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
