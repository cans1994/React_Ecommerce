import { Component } from "react";
import Cactus from "../assets/cactus.jpg";
import Pink from "../assets/pink.jpg";
import Rose from "../assets/rose.jpg";

export const Objets = [
  {
    name: "Cactus",
    Price: 3,
    description: "hehe",
    image: Cactus,
  },
  {
    name: "Pink",
    Price: 300,
    description: "hoho",
    image: Pink,
  },
  {
    name: "Rose",
    Price: 5,
    description: "huhu",
    image: Rose,
  },
];

class Plantliste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "false",
    };
  }

  toggleHover() {
    this.setState({ hover: "true" });
  }

  render() {
    // var linkStyle;
    if (this.state.hover) {
      <p>plop</p>;
      //   linkStyle = { color: "#ed1212", cursor: "pointer" };
    } else {
      <p>pas plop</p>;
      //   linkStyle = { color: "#000" };
    }
    return (
      <p
        // style={linkStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {/* Testfkehsduifgcdskughfjdsghj */}
        {this.state.hover}
      </p>
    );
  }
}

export default Plantliste;

// class ImgWrapper extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {hovered: false};
//     }

//     render() {
//     return (
//       <Image
//         src={this.props.assets.Cactus}
//         alt={this.props.assets.name}
//         onMouseOver={() => this.setState({hovered: false})}
//         style={{transform: ${this.state.hovered ? 'scale(1.5,1.5)' : null}}}
//       />
//     );
//   }
// }

/* class MyOtherComponent extends Component {

  render() {
    return (
      <ImageWrapper assets={Cactus}/>
    );
  }
}  */

// export default function objetsofthings() {
//   return (
//     <ul>
//       {Objets.map(({ name, description, Price, image }) => (
//         <ul>
//           <li>{name}</li>
//           <img src={image} />
//           <li>{Price} €</li>
//           <button>Ajoutez au panier</button>
//           {/* <li>if {description}</li> */}
//           <hr />
//         </ul>
//       ))}
//     </ul>
//   );
// }

/*function Affichage() {

    return (
        
            /*{ Liste.map((plant) => (
            case cactus : 
            cactus.jpg
            break;
            case pink : 
            pink.jpg
            break;
            case rose: 
            rose.jpg
            break;
                )
                )
            }
           )*/

/* function App() {
    return <img src={Cactus} />
}
 mauvaise*/
/*export default Affichage*/
