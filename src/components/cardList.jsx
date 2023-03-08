import Card from "./card";
import "../styles/cardList.css";

export default function CardList({ pokemons }) {
	return (
		<div className="card-list">
			{pokemons.map((pokemon) => (
				<Card key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
}
