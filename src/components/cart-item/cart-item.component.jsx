import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>
          {quantity} x ${price * quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
