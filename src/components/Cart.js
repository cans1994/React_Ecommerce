// import { liste } from './plantliste';

function Cart() {
  const cactusPrice = 3;
  const pinkPrice = 300;
  const rosePrice = 5;

  return (
    <div className="ApercuPanier">
      <h2>Votre Panier</h2>
      <ul>
        <li>Cactus : {cactusPrice} €</li>
        {/* <button>Ajouter au panier</button> */}
        <li>Cerisier : {pinkPrice} €</li>
        {/* <button>Ajouter au panier</button> */}
        <li>Rose: {rosePrice} €</li>
        {/* <button>Ajouter au panier</button> */}
      </ul>
      Total : {cactusPrice + pinkPrice + rosePrice} €
    </div>
  );
}

export default Cart;
