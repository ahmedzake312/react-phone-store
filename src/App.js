import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ProductsList from "./Components/ProductsList";
import Default from "./Components/Default";
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details";
import Modal from "./Components/Modal";
class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <Switch>
        <Route path="/" exact component={ProductsList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
        </Switch>
        <Modal/>
      </>
    );
  }
}

export default App;
