import React from "react";
import Categories from "./Categories"
import Header from "./common/header"
import HomePage from "./home/HomePage";
import About from "./about/AboutPage"
import AuthPage from "./Auth/Register"

const App = () => (
  <div className="container-fluid">
    <Header />
    <AuthPage />
    <HomePage />
    <About />
      <h2>Pizza categories</h2>
    <Categories />
  </div>
);

export default App;
