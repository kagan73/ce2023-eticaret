import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import ProductsShowCase from "./modules/products-module/ProductsShowCase";
import CartShowCase from "./modules/cart-module/CartShowCase";
import Eticaret from "./modules/Eticaret";

function App() {
  return (
    <Container>
      <Eticaret />
    </Container>
  );
}

export default App;
