import { createEffect, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { fetchPokemonDetail, fetchPokemonList } from "../service";
import { useData } from "../hooks/use-data.hook";
import "../index.css";
import { PokemonCard } from "../components/pokemon-card.component";
import { Container } from "../components/container.component";
export function IndexPage() {
  const pokemonList = useData(() => fetchPokemonList());
  const [formattedPokemonList, setFormattedPokemonList] = createSignal();
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const pokeList = pokemonList()?.map(async (pokemon) => {
      const pokemonDetailResponse = await fetchPokemonDetail(pokemon.name);

      return {
        name: pokemonDetailResponse.name,
        image: pokemonDetailResponse.sprites.front_default,
        types: pokemonDetailResponse.types.map((type) => type.type.name),
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
    <Container>
      <h2 class="text-xl font-bold mb-[50px]">Pokemon List</h2>
      {loading() ? (
        <h1>loading</h1>
      ) : (
        <div class="flex flex-wrap">
          {formattedPokemonList()?.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
      )}
    </Container>
  );
}
