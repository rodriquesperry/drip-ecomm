import { useContext } from "react";
import { CartItemContext } from "../../context/cart-item.context";

import TableItem from "../../components/checkoutTable/checkout-table-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartItemContext);

  return (
    <div className="checkout-table-container">
      {!cartItems.length ? (
        <h2>There is nothing in your cart!</h2>
      ) : (
        <div className="checkout-table">
          <div className="checkout-table-header">
            <h4 className="table-header">Product</h4>
            <h4 className="description-header table-header">Description</h4>
            <h4 className="table-header">Quantity</h4>
            <h4 className="price-header">Price</h4>
            <h4 className="remove-header">Remove</h4>
          </div>

          <hr />

          <div className="checkout-table-items">
            {cartItems.map((item) => (
              <TableItem key={item.id} checkoutItem={item} />
            ))}
          </div>
          <div className="total-price">
            <h2>Total: ${cartTotal}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
