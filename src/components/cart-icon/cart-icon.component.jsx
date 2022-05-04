import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartItemContext } from "../../context/cart-item.context";

import { ReactComponent as ShoppingCartIcon } from "../../asstes/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { Route } from "react-router-dom";

const CartIcon = () => {
  const { cartCount } = useContext(CartItemContext);

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    if (document.title === "checkout") {
      setIsCartOpen(!isCartOpen);
    }
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      {<span className="item-count">{cartCount}</span>}
    </div>
  );
};

export default CartIcon;
