import { useParams } from "@solidjs/router";

export function PokemonDetailPage() {
  const params = useParams();
  // const pokemonData =

  const pokemonName = params["pokemonName"];

  return <div> {JSON.stringify(params)} </div>;
}
