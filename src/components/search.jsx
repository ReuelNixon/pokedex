import "../styles/search.css";

export default function SearchBox({ pokemons, setFilteredPokemons }) {
	const changeHandler = (e) => {
		setFilteredPokemons(
			pokemons.filter((pokemon) =>
				pokemon.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			)
		);
	};
	return (
		<div>
			<input
				className="search-box"
				type="search"
				placeholder="Search Pokemon"
				onChange={changeHandler}
			/>
		</div>
	);
}
