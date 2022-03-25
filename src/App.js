import logo from "./logo.svg";
import "./App.css";
import HeaderPerso from "./components/headerPerso";
import Produits from "./components/Produits";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Affichage from "./components/plantliste";
import ColorPickerMenu from "./components/ColorPickerMenu";
import Plantliste from "./components/plantliste";
import { useState } from "react";
import React, { Component } from "react";

// const addToCart = (productId, variantInfo) => {
//   if (variantInfo) {
//     commerce.cart.add(productId, 1, variantInfo).then((res) => {
//       setCart(res.cart);
//     });
//   } else {
//     window.alert("Please buy more");
//   }
// };

function App() {
  return (
    <div className="App">
      <HeaderPerso />
      <ColorPickerMenu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Produits />
        <Cart />
      </header>
      <Affichage />
      <Plantliste />
      {/* <ImageWrapper /> */}
      <Footer />
    </div>
  );
}

// const [cart, setCart] = useState();

export default App;
