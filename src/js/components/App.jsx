import React from "react";
import Categories from "./Categories"
import Header from "./common/header"
import HomePage from "./home/HomePage";
import About from "./about/AboutPage"

const App = () => (
  <div className="container-fluid">
    <Header />
    <HomePage />
    <About />
      <h2>Pizza categories</h2>
    <Categories />
  </div>
);

export default App;
