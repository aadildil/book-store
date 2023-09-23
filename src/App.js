import React, { useState } from "react";
import Header from "./components/Header";
import DisplayBooks from "./components/DisplayBooks";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookData, setBookData] = useState(null);
 


  return (
   <div>
     <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} setBookData={setBookData} bookData={bookData} />
     <DisplayBooks    bookData={bookData}  />
   </div>
  );
};

export default App;
