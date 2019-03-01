import React from "react";
import { Link, HashRouter } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Online Pizzeria</h1>
    <p>Order pizza and have it delivered to your doorstep.</p>
    <HashRouter>
      <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
    </HashRouter>
  </div>
);

export default HomePage;
