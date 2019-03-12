import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./js/components/home/HomePage";
import AboutPage from "./js/components/about/AboutPage";
import Categories from "./js/components/categories/Categories";
import Register from "./js/components/Auth/Register";
import Login from "./js/components/Auth/Login"
import AddCategory from "./js/components/categories/AddCategory";
import UpdateCategory from "./js/components/categories/UpdateCategory";
import Pizza from "./js/components/Pizza/Pizza";
import UpdatePizza from "./js/components/Pizza/UpdatePizza";
import AddPizza from "./js/components/Pizza/AddPizza";
import CategoriesPizza from "./js/components/Pizza/CategoriesPizza";

const Routes = () => (
  <div>
    <Route exact path='/' component={HomePage} />
    <Route path='/categories' component={Categories} />
    <Route path='/add_category' component={AddCategory} />
    <Route path='/about' component={AboutPage} />
    <Route path='/signup' component={Register} />
    <Route path='/login' component={Login}/>
    <Route path='/all_pizzas' component={Pizza}/>
    <Route path='/categories/:id' component={UpdateCategory}/>
    <Route path='/pizza/:id' component={UpdatePizza}/>
    <Route path='/category/:category_id/pizzas' component={AddPizza}/>
    <Route path='/category/:category_id/all_pizzas' component={CategoriesPizza}/>
  </div>
);

export default Routes;
