import { FC } from "react";
import Image from "next/image";
import TypeIcons from "./TypeIcons";
import ColorBlendedBG from "./ColorBlendedBG";

// Pokemon için türler
interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string | null;
    };
  };
}

interface PokemonAbility {
  ability: {
    name: string;
  };
}

// Props için tür tanımı
interface PokemonCardProps {
  pokemonData: {
    name: string;
    sprites: PokemonSprites;
    types: PokemonType[];
    stats: PokemonStat[];
    abilities: PokemonAbility[];
  };
  typeColors: { [key: string]: string };
  abilityText: string; // Yeni prop
}

const PokemonCard: FC<PokemonCardProps> = ({
  pokemonData,
  typeColors,
  abilityText,
}) => {
  return (
    <div className="pokemon-card-border bg-yellow-200 p-3 rounded-2xl">
      <div className="pokemon-card bg-fuchsia-50 p-2 rounded-lg shadow-md aspect-[6.3/8.8] relative">
        {/* POKEMON'S NAME AND HP */}
        <div className="absolute top-0 left-2 right-4 flex justify-between items-start">
          {/* POKEMON'S NAME TEXT */}
          <span className="text-xl font-bold font-sans text-black ml-8">
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1).toLowerCase()}
          </span>

          {/* POKEMON'S HP / HP STAT NUMBER */}
          <div className="font-extrabold font-sans text-right mr-4">
            <span className="text-[10px]">
              {pokemonData.stats[0].stat.name.toUpperCase()}{" "}
            </span>
            <span className="text-xl">{pokemonData.stats[0].base_stat}</span>
          </div>
        </div>

        {/* Pokemon Sprite */}
        <ColorBlendedBG types={pokemonData.types} typeColors={typeColors}>
          <Image
            src={
              pokemonData.sprites.other["official-artwork"].front_default || ""
            }
            alt={pokemonData.name}
            width={180}
            height={180}
            className="object-contain"
            unoptimized
          />
          {/* TYPE ICONS AND TYPE NAMES */}
          <div className="pokemon-types flex items-center">
            {/* TYPE ICONS */}
            <TypeIcons types={pokemonData.types} />

            {/* TYPE NAMES */}
            <div className="flex flex-col ml-1 gap-y-3">
              {pokemonData.types.map((type, index) => {
                const typeNames = type.type.name.split("-");

                return typeNames.map((pokeType, typeIndex) => (
                  <span
                    key={`${pokeType}-${index}-${typeIndex}`}
                    className="text-sm font-sans font-semibold text-black"
                  >
                    {pokeType.charAt(0).toUpperCase() + pokeType.slice(1)}
                  </span>
                ));
              })}
            </div>
          </div>
        </ColorBlendedBG>

        {/* ABILITY NAME AND ABILITY TEXT */}
        <div className="mt-1 ml-2">
          <span
            className="rounded-xl pl-1.5 pr-1.5 text-xs font-bold font-sans italic border-solid border-[1.4px] border-black text-rose-600"
            style={{
              background:
                "linear-gradient(to bottom, #C0C0C0 15%, #fff 40%, #C0C0C0 100%)",
            }}
          >
            Ability
          </span>
          <span className="m-2"></span>
          <span className="text-md font-bold font-mono text-rose-600">
            {pokemonData.abilities[0].ability.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>

          {/* ABILITY TEXT */}
          <div className="absolute mt-2 left-5 right-3 text-xs text-black font-sans font-semibold max-h-40 overflow-y-auto scrollbar-thin">
            {abilityText}
          </div>
        </div>

        {/* ATTACK AND DEFENSE TEXT */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between px-4">
          <span className="font-bold text-blue-500">
            <span className="text-xs">ATK </span>
            <span className="text-lg">{pokemonData.stats[1].base_stat}</span>
          </span>

          <span className="font-bold text-green-500">
            <span className="text-xs">DEF </span>
            <span className="text-lg">{pokemonData.stats[2].base_stat}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
