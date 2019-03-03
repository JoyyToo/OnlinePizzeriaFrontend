import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./js/components/home/HomePage";
import AboutPage from "./js/components/about/AboutPage";
import Categories from "./js/components/categories/Categories";
import Register from "./js/components/Auth/Register";

const Routes = () => (
  <div>
    <Route exact path='/' component={HomePage} />
    <Route path='/categories' component={Categories} />
    <Route path='/about' component={AboutPage} />
    <Route path='/signup' component={Register} /> 
  </div>
);

export default Routes;
