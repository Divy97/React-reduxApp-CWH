import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
};

export default App;
