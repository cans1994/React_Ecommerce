import logo from "./logo.svg";
import "./App.css";
import HeaderPerso from "./components/headerPerso";
import Produits from "./components/Produits";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Affichage from "./components/plantliste";
import ColorPickerMenu from "./components/ColorPickerMenu";

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
      <Footer />
    </div>
  );
}

export default App;
