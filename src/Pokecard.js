import React from "react";

const Pokecard = ({ id, name, type, base_experience }) => {
  // const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const padToThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);
  const paddedId = padToThree(`${id}`);
  const imageUrl = ` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

  return (
    <div className="card">
      <h3 className="card-poke-name">{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>{`Type: ${type}`}</p>
      <p>{`EXP: ${base_experience}`}</p>
    </div>
  );
};

export default Pokecard;
