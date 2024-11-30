// PokemonSearchBar.tsx

import { FC } from "react";

interface PokemonSearchBarProps {
  pokemonName: string;
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
  fetchData: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PokemonSearchBar: FC<PokemonSearchBarProps> = ({
  pokemonName,
  setPokemonName,
  fetchData,
  handleKeyDown,
}) => {
  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Pokemon'un adını giriniz."
        className="border-2 p-2 m-2 hover:border-rose-900 outline-none"
      />
      <button onClick={fetchData} className="bg-rose-900 text-white p-2 m-2">
        Kart oluştur
      </button>
    </div>
  );
};

export default PokemonSearchBar;
