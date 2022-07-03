import { useContext } from "react";
import { CartItemContext } from "../../context/cart-item.context";

import { ReactComponent as LeftAngleBracket } from "../../asstes/1608508_angle_left_icon.svg";
import { ReactComponent as RightAngleBracket } from "../../asstes/1608509_angle_right_icon.svg";
import { ReactComponent as Remove } from "../../asstes/x.svg";

import "./checkout-table-item.styles.scss";

const TableItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const {
    addItemToCart,
    decrementItemQuantity,
    removeItemFromCheckout,
  } = useContext(CartItemContext);

  return (
    <div className="checkoutTable-item-container">
      <div className="checkout-table-item">
        <div className="product-image-container">
          <img src={imageUrl} alt={name} className="product-image" />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
          <div
            onClick={() => decrementItemQuantity(checkoutItem)}
            className="decrement-quanity-icon-container"
          >
            <LeftAngleBracket className="decrement-quanity-icon" />
          </div>
          <span className="quantity-number-container"><strong>{quantity}</strong></span>
          <div
            onClick={() => addItemToCart(checkoutItem)}
            className="increment-quanity-icon-container"
          >
            <RightAngleBracket className="increment-quanity-icon" />
          </div>
        </div>
        <span className="price">${price * quantity}</span>
        <button
          onClick={() => removeItemFromCheckout(checkoutItem)}
          type="button"
          className="remove"
        >
          <Remove className="remove-icon" />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default TableItem;
