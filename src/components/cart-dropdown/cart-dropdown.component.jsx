import { useContext } from "react";

import { CartItemContext } from "../../context/cart-item.context";
import { ProductsContext } from "../../context/products.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {products.map((product, index) => (
          <CartItem key={product.id} product={product} />
        ))}
        <Button type="button">Go To Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
