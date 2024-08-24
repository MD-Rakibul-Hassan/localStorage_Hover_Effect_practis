import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Carts from "./Components/Carts";
import {getValueFormLocalStorage,saveValueToLocalStorage} from './Local_Database/database'

function App() {
  const [books, setBooks] = useState([]);
  const [cartItems,setCartItem] = useState(getValueFormLocalStorage() || [])

  useEffect(() => {
    const localData = getValueFormLocalStorage();
    setCartItem(localData)
  }, [cartItems]);


  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
      .catch(error => console.log(error))
  }, []);

  const handleAddToCart = (book) => {
    // const findCartItem = books.filter((book) => book.isbn13 === id);
    // setAddToCart(findCartItem);
    saveValueToLocalStorage('books',book)
  }

  return (
    <>
      <div className="nav">
        <ul>
          <li>LOGO</li>
          <li>
            Cart <sup>{cartItems ? cartItems.length : "0"}</sup>
          </li>
        </ul>
      </div>
      <Carts books={books} handleAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
