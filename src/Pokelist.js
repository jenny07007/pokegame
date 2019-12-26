import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  // static defaultProps = {
  //   pokemon: [
  //     { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //     { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  //     { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  //     { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  //     { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  //     { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  //     { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  //     { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  //   ]
  // };

  renderPokes() {
    return this.props.pokemon.map(({ id, ...otherProps }) => (
      <Pokecard key={id} id={id} {...otherProps} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Pokedex</h2>
        <p>Total Experience: {this.props.exp}</p>
        {this.props.isWinner ? (
          <div id="winner">
            <span role="img" aria-label="winner">
              🥇
            </span>
            WINNER
          </div>
        ) : (
          ""
        )}
        <div className="card-container">{this.renderPokes()}</div>
      </div>
    );
  }
}
export default Pokedex;
