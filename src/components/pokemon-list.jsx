import { A } from "@solidjs/router";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { useData } from "../hooks/use-data.hook";
import { fetchPokemonDetail, fetchPokemonList } from "../service";

export default function PokemonList() {
  const pokemonList = useData(() => fetchPokemonList());
  const [formattedPokemonList, setFormattedPokemonList] = createSignal();
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const pokeList = pokemonList()?.map(async (pokemon) => {
      const pokemonDetailResponse = await fetchPokemonDetail(pokemon.name);

      return {
        name: pokemonDetailResponse.name,
        image: pokemonDetailResponse.sprites.front_default,
      };
    });

    if (pokeList?.length) {
      Promise.all(pokeList).then((values) => {
        setFormattedPokemonList(values);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  });

  return (
    <div>
      <h2>Pokemon List</h2>
      {loading() ? (
        <h1>loading</h1>
      ) : (
        formattedPokemonList()?.map((pokemon, index) => (
          <ul>
            <li key={index}>
              <img src={pokemon.image} />
              <A href={`/pokemon/${pokemon.name}`}>{pokemon.name}</A>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}
