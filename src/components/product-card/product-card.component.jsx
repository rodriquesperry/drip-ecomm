import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const addToCart = ({ cartItem }) => {
    const cartItems = [];

    cartItems.forEach((cartItem) => {
      cartItems.push(product);
    });

    console.log(cartItems);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
