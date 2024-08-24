
import React from 'react'

const Cart = ({
  url,
  title,
  isbn13,
  price,
  img,
  subtitle,
  handleAddToCart,
  book
}) => {
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart-body">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subtitle}</p>
        <button onClick={() => handleAddToCart(book)} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart