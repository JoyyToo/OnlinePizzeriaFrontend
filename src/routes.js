import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import App from "./js/components/App";
import HomePage from "./js/components/home/HomePage";
import AboutPage from "./js/components/about/AboutPage";

export default (
  <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
  </BrowserRouter>
);
