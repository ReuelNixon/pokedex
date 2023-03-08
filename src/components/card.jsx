import "../styles/card.css";

export default function Card({ pokemon }) {
	return (
		<div className="pokemon">
			<img src={pokemon.image} alt={pokemon.name} />
			<p>
				{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
			</p>
		</div>
	);
}
