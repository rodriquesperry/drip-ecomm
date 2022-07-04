import { useContext, Fragment, useState, useEffect } from 'react';

import { CartItemContext } from '../../context/cart-item.context';
import { ProductContext } from '../../context/product.context';

import Button from '../../components/button/button.component';

import './product-detail.styles.scss';

const ProductDetail = () => {
  const { product } = useContext(ProductContext);
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartItemContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-detail-container'>
      <div className='product-detail-image'>
        <img src={imageUrl} alt={name} className='details-image' />
      </div>
      <div className='product-details'>
        <hr />
        <br />
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>All taxes and duties included</p>
        <form action=''>
          <label htmlFor='size'>size:</label>
          <div>
            <select name='size' id='size'>
              <option value='Small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
              <option value='xLarge'>X-Large</option>
            </select>
          </div>
        </form>
        <Button type='button' onClick={addProductToCart}>
          Add To Cart
        </Button>
        <h3 className='product-info-title'>PRODUCT INFO</h3>
        <p className='product-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, et
          nisi? Voluptatem optio, nam maxime dolorum tempora quam doloremque
          dicta aperiams, voluptas facere recusandae, tenetur nesciunt vero
          soluta reiciendis vel earum. Assumenda quae at rem corrupti sit nobis
          veritatis, similique distinctio ipsa dolor qui quaerat repellendus
          dolore molestias cumque rerum iusto possimus ab aliquid? Labore, harum
          quas! Saepe dolor aut natus minima enim voluptatum ex consectetur illo
          doloremque consequuntur. Sed sunt voluptate dolorum suscipit eum
          fugit, accusamus pariatur, nisi veritatis adipisci repudiandae.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
