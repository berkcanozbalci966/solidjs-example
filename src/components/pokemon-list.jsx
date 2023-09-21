import { createSignal, onCleanup } from "solid-js";
import { fetchPokemonList } from "../service";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = createSignal([]);

  // Verileri API'den al ve bileşene bağla
  fetchPokemonList().then((data) => {
    setPokemonList(data);
  });

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList()?.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
