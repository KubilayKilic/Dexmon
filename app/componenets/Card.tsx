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

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

interface PokemonData {
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}

const Card = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [abilityText, setAbilityText] = useState<string>("");

  const fetchAbility = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ability verisi alınırken bir hata oluştu.");
      }
      const data = await response.json();

      const englishEffect = data.effect_entries.find(
        (entry: any) => entry.language.name === "en"
      )?.effect;

      setAbilityText(englishEffect || "No ability details available.");
    } catch (error) {
      console.error("Hata:", error);
      setAbilityText("Ability details could not be loaded.");
    }
  };

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

      localStorage.setItem("pokemonData", JSON.stringify(pokemonData));

      setPokemonData(data); // State'e kaydet

      // İlk ability URL'sini fetch et
      if (data.abilities.length > 0) {
        fetchAbility(data.abilities[0].ability.url);
      }
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

      <div className="seperator mt-6"></div>

      <div className="">
        {/* Pokémon verisi geldiyse ve sprite varsa göster */}
        {pokemonData &&
          pokemonData.sprites.other["official-artwork"].front_default && (
            <PokemonCard
              pokemonData={pokemonData}
              typeColors={typeColors}
              abilityText={abilityText} // Ability text prop olarak geçiliyor
            />
          )}
      </div>
    </div>
  );
};

export default Card;
