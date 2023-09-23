import React, { useState, useEffect } from "react";
import axios from "axios";

const firstArray = ["harry potter", "sherlock holms", "game of thrones"];
const colorCodes = ["#00796B", "#8E44AD", "#6E8B3D"];
const DisplayBooks = ({  bookData }) => {
  const [first, setFirst] = useState(true);
  const [defaultBooks, setDefaultBooks] = useState([]);

  async function getBookData(searchItem) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: `${searchItem}`,
          },
        }
      );

      setDefaultBooks((prevDefaultBooks) =>
        prevDefaultBooks.concat(response.data.items[0])
      );

      // Check the response in the console
      console.log("API Response:", defaultBooks);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    firstArray.forEach((item) => {
      getBookData(item);
    });
  }, []);

  return (
    <div className="container">
      {
      bookData == null
        ? defaultBooks &&
          defaultBooks.map((book, index) => {
            let color=colorCodes[index%3]
            return (
              <div className="book-container" key={book.id} style={{backgroundColor:color}}>
                <div className="book-img">
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                </div>
                <div className="book-details">
                  <div className="book-title">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.searchInfo.textSnippet}</p>
                  </div>
                  <div className="btn-container">
                    <button className="nowReadButton">now read!</button>
                  </div>
                </div>
              </div>
            );
          })
        : bookData.map((book, index) => {
            let color=colorCodes[index%3]
            return (
                <div className="book-container" key={book.id} style={{backgroundColor:color}}>
                <div className="book-img">
                  {<img src={book.volumeInfo.imageLinks.thumbnail} alt="" /> }
                </div>
                <div className="book-details">
                  <div className="book-title">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.searchInfo.textSnippet}</p>
                  </div>
                  <div className="btn-container">
                    <button className="nowReadButton">now read!</button>
                  </div>
                </div>
              </div>
            )
          })}
    </div>
  );
};

export default DisplayBooks;
