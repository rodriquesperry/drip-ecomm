import { useState } from 'react';

import "./product-in-cart.styles.scss";

const ProductInCart = ({ product }) => {
    const { imageUrl, title, quantity, price } = product;
    return (
        <div>
            <img src={imageUrl} alt=""/>
            <p>{title}</p>
            <p><span>{quantity}</span>x<span>{price}</span></p>
        </div>
    )
};


export default ProductInCart;