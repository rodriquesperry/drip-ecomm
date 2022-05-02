import { useContext } from "react";

import { ProductsInCartContext } from '../../context/products-in-cart.context';

import Button from "../button/button.component";
import ProductInCart from "../product-in-cart/product-in-cart.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { products } = useContext(ProductsInCartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {products.map((product) => (
          <ProductInCart key={product.id} product={product} />
      ))}
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
