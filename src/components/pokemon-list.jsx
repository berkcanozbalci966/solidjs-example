import { A } from "@solidjs/router";
import { createSignal, onCleanup } from "solid-js";
import { useData } from "../hooks/use-data.hook";
import { fetchPokemonDetail, fetchPokemonList } from "../service";

export default function PokemonList() {
  const pokemonList = useData(() => fetchPokemonList());

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList()?.map((pokemon, index) => (
          <li key={index}>
            <A href={`/pokemon/${pokemon.name}`}>{pokemon.name}</A>
          </li>
        ))}
      </ul>
    </div>
  );
}
