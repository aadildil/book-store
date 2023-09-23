import React, { useState, useEffect } from "react";
import axios from "axios";

import heart from "../images/heart.png";
import bell from "../images/bell.png";
import logo from "../images/logoIcon.png";
import diamond from "../images/diamond.png";
import search from "../images/search.png";
import cat from "../images/cat.jpg";

const Header = ({ setSearchTerm, searchTerm, setBookData,bookData}) => {
 
  

  //fetching search result to bookData array
  async function getBookData(searchItem) {
    try {
      console.log(searchItem);
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?",
        {
          params: {
            q: `${searchItem}`,
          },
        }
      );
    setBookData(response.data.items);
    console.log(response.data.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="" className="logo-icon" />
          <div className="logo-text">
            <span className="keazon roboto">KeazoN</span>
            <span className="books varela ">BOOKS</span>
          </div>
        </div>
        <div className="search-container">
          <div className="search-box">
            <img src={search} alt="" />
            <input
              type="text"
              className="search roboto"
              placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="search-btn roboto"
            onClick={() => {
              if (!searchTerm) return;
              getBookData(searchTerm);
            }}
          >
            Search
          </button>
        </div>
        <div className="buttons-container">
          <img src={heart} alt="" />
          <img src={bell} alt="" />
          <img src={diamond} alt="" />
          <img src={cat} alt="" className="catimg" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
