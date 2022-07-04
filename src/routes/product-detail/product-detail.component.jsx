import { useContext, Fragment } from "react";
import { ProductContext } from "../../context/product.context";

import "./product-detail.styles.scss";

const ProductDetail = () => {
  const { product } = useContext(ProductContext);

  const { name, price, imageUrl } = product;

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={imageUrl} alt={name} className="details-image" />
      </div>
      <div className="product-details">
        <hr />
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>All taxes and duties included</p>
        <form action="">
          <label htmlFor="size">size:</label>
          <div>
            <select name="size" id="size">
              <option value="Small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xLarge">X-Large</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
