import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./js/components/home/HomePage";
import AboutPage from "./js/components/about/AboutPage";
import Categories from "./js/components/categories/Categories";
import Register from "./js/components/Auth/Register";
import Login from "./js/components/Auth/Login"

const Routes = () => (
  <div>
    <Route exact path='/' component={HomePage} />
    <Route path='/categories' component={Categories} />
    <Route path='/about' component={AboutPage} />
    <Route path='/signup' component={Register} />
    <Route path='/login' component={Login}/>
  </div>
);

export default Routes;
