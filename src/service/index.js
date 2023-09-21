const API_BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList() {
  const response = await fetch(API_BASE_URL + "/pokemon");
  const result = await response.json();

  return result.results;
}

export async function fetchPokemonDetail(pokemonName) {
  const response = await fetch(API_BASE_URL_ + "/pokemon/" + pokemonName);
  const result = await response.json();
  console.log(result);
}
