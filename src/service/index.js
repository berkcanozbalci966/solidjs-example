const API_BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList() {
  const response = await fetch(API_BASE_URL + "/pokemon");
  const result = await response.json();

  return result.results;
}
