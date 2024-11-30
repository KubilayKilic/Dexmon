// Card.tsx

"use client";

import { useState } from "react";
import PokemonSearchBar from "./PokemonSearchBar";
import PokemonCard from "./PokemonCard";
import { typeColors } from "./typeColors";

// Pokemon tipi için uygun interface'ler
interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonSprites {
  front_default: string | null;
  other: {
    "official-artwork": {
      front_default: string | null;
    };
  };
}

interface PokemonData {
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
}

const Card = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const fetchData = async () => {
    if (!pokemonName) return; // Eğer pokemon adı boşsa işlem yapma

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokemon verisi alınırken bir hata oluştu.");
      }

      const data: PokemonData = await response.json();

      console.log(pokemonData);

      setPokemonData(data); // State'e kaydet
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div>
      {/* Pokémon arama ve buton */}
      <PokemonSearchBar
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        fetchData={fetchData}
        handleKeyDown={handleKeyDown}
      />

      <div className="seperator mt-11"></div>

      {/* Pokémon verisi geldiyse ve sprite varsa göster */}
      {pokemonData &&
        pokemonData.sprites.other["official-artwork"].front_default && (
          <PokemonCard pokemonData={pokemonData} typeColors={typeColors} />
        )}
    </div>
  );
};

export default Card;
