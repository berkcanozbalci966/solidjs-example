import { useParams } from "@solidjs/router";
import { useData } from "../hooks/use-data.hook";
import { fetchPokemonDetail } from "../service";

export function PokemonDetailPage() {
  const params = useParams();
  const pokemonName = params["pokemonName"];
  const pokemonData = useData(() => fetchPokemonDetail(pokemonName));

  return (
    <div>
      <h2>Name:{pokemonData()?.forms[0]?.name} </h2>

      <h2>Pictures</h2>
      {pokemonData()?.sprites &&
        Object.values(pokemonData().sprites).map((pictureLink) => {
          return <img src={pictureLink} alt="" />;
        })}

      <h2>Stats</h2>
      {pokemonData()?.stats &&
        Object.values(pokemonData().stats).map((stat) => {
          return (
            <p key={stat.stat.name}>
              {" "}
              {stat.stat.name} : {stat.base_stat}{" "}
            </p>
          );
        })}
    </div>
  );
}
