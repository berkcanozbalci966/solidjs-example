import { useParams } from "@solidjs/router";
import { useData } from "../hooks/use-data.hook";
import { fetchPokemonDetail } from "../service";
import "../index.css";
import { Carousel } from "../components/carousel.component";
import { Breadcrumb } from "../components/breadcrumb.component";
import { Container } from "../components/container.component";

export function PokemonDetailPage() {
  const params = useParams();
  const pokemonName = params["pokemonName"];
  const pokemonData = useData(() => fetchPokemonDetail(pokemonName));

  return (
    <Container>
      <Breadcrumb
        links={[
          {
            label: "home",
            value: "/",
          },
          { label: pokemonName, value: `/pokemon/${pokemonName}` },
        ]}
      />
      <h2>Name:{pokemonData()?.forms[0]?.name} </h2>
      <h2>Pictures</h2>
      {pokemonData()?.sprites && (
        <Carousel
          images={Object.values(pokemonData().sprites).filter(
            (image) => typeof image === "string"
          )}
        />
      )}
      <h2>Stats</h2>
      {pokemonData()?.stats &&
        Object.values(pokemonData().stats).map((stat) => {
          return (
            <p key={stat.stat.name}>
              {stat.stat.name} : {stat.base_stat}{" "}
            </p>
          );
        })}
    </Container>
  );
}
