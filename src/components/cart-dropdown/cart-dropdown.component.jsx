import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemContext } from "../../context/cart-item.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { ReactComponent as Remove } from "../../asstes/x.svg";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {

  const { cartItems } = useContext(CartItemContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
        ))}
        <Button type="button" onClick={handleGoToCheckout}>
          Go To Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
