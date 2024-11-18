import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];




function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleNext = () => {
    setPokemonIndex(pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0 )
  };

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length -1)
  };

  return (
    <section>
      <div>
        <button onClick={handleNext}>Suivant</button>
        <button onClick={handlePrevious}>Précédent</button>
      </div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </section>
  );
}

export default App;