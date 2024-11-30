// PokemonCard.tsx

import { FC } from "react";
import Image from "next/image";
import TypeIcons from "./TypeIcons";
import ColorBlendedBG from "./ColorBlendedBG";

interface PokemonCardProps {
  pokemonData: any;
  typeColors: { [key: string]: string };
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemonData, typeColors }) => {
  return (
    <div className="pokemon-card-border bg-yellow-200 p-4 rounded-xl">
      <div className="pokemon-card bg-fuchsia-50 p-4 rounded-lg shadow-md aspect-[2/3] relative">
        <div className="absolute bottom-2 top-2 left-4 right-4 flex justify-between items-start">
          {/* Name reformatted Text */}
          <span className="text-lg font-bold text-gray-800">
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1).toLowerCase()}
          </span>

          {/* Types */}
          <div className="pokemon-types flex flex-col items-center">
            {/* Type Icons */}
            <TypeIcons types={pokemonData.types} />

            {/* Type Names - Yan Yana */}
            <div className="flex flex-row gap-4 mt-[-1px]">
              {pokemonData.types.map((type) => {
                const typeNames = type.type.name.split("-");

                return typeNames.map((pokeType, index) => (
                  <span
                    key={pokeType + index}
                    className="text-sm font-bold text-gray-700"
                  >
                    {pokeType}
                  </span>
                ));
              })}
            </div>
          </div>

          {/* Hp & Text */}
          <div className="font-bold text-right text-red-600">
            <span className="text-xs">
              {pokemonData.stats[0].stat.name.toUpperCase()}:{" "}
            </span>
            <span className="text-lg ">{pokemonData.stats[0].base_stat}</span>
          </div>
        </div>

        {/* Type Icons */}
        {/* <div className="absolute top-6 right-0 flex justify-between px-4">
          <TypeIcons types={pokemonData.types} />
        </div> */}

        {/* Pokemon Sprite */}
        <ColorBlendedBG types={pokemonData.types} typeColors={typeColors}>
          <Image
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt={pokemonData.name}
            width={220}
            height={220}
            className="object-contain"
            unoptimized
          />
        </ColorBlendedBG>

        {/* Ability Text */}
        <div className="absolute flex justify-between px-4 mt-3 mb-3">
          POKEMON ABILITY DETAILS HOPEFULLY WILL DISPLAY HERE
        </div>

        {/* ATTACK AND DEFENSE TEXT */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between px-4">
          <span className="font-bold text-blue-600">
            <span className="text-xs">
              {pokemonData.stats[1].stat.name.toUpperCase()}:{" "}
            </span>
            <span className="text-lg ">{pokemonData.stats[1].base_stat}</span>
          </span>

          <span className="font-bold text-green-600">
            <span className="text-xs">
              {pokemonData.stats[2].stat.name.toUpperCase()}:{" "}
            </span>
            <span className="text-lg ">{pokemonData.stats[2].base_stat}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
