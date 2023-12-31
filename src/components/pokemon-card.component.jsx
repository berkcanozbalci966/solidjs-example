import { A } from "@solidjs/router";

export function PokemonCard({ pokemon: { name, image, types } }) {
  return (
    <A href={`/pokemon/${name}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            {types.map((type) => (
              <div className="badge badge-outline">{type}</div>
            ))}
          </div>
        </div>
      </div>
    </A>
  );
}
