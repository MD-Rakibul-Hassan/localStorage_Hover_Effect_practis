import React from "react";
import Cart from "./Cart";

const Carts = ({ books, handleAddToCart }) => {

  return (
    <div className="container">
      {books.map((book, index) => {
        const { url, title, price, isbn13, image, subtitle } = book;
        return (
          <Cart
            key={index}
            url={url}
            title={title}
            price={price}
            isbn13={isbn13}
            img={image}
            subtitle={subtitle}
            handleAddToCart={handleAddToCart}
            book = {book}
          />
        );
      })}
    </div>
  );
};

export default Carts;
