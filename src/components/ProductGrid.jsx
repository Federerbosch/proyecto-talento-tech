import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ selectedType, searchTerm }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        let urls = [];

        if (selectedType) {
          const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
          const data = await res.json();
          urls = data.pokemon.slice(0, 16).map(p => p.pokemon.url);
        } else {
          const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40");
          const data = await res.json();
          urls = data.results.map(p => p.url);
        }

        const pokemonData = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
        );

        console.log("Pokémon cargados:", pokemonData);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, [selectedType]);

  // 🔍 Filtro por nombre si hay término de búsqueda
  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="row g-4">
      {filteredList.map((pokemon) => (
        <div className="col-6 col-md-4 col-lg-3" key={pokemon.id}>
          <ProductCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
