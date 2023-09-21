/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router, Routes } from "@solidjs/router";
import { TestPage } from "./pages/test";
import { PokemonDetailPage } from "./pages/pokemon-detail.page";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/test" component={TestPage} />
        <Route path="/pokemon/:pokemonName" component={PokemonDetailPage} />
      </Routes>
    </Router>
  ),
  root
);
