import React, { useState } from "react";
import "./App.css";
import NewsContainer from "./components/NewsContainer";
import NavBar from "./components/NavBar";

function App() {
  const [category, setCategory] = useState(`general`);
  return (
    <>
      <div className="app">
        <NavBar setCategory={setCategory} />
        <NewsContainer category={category} />
      </div>
    </>
  );
}

export default App;
