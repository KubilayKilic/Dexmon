interface TypeIconsProps {
  types: { type: { name: string } }[]; // Pokemon türlerini içeren bir dizi
}

const typeImagePath = (type: string) => `/images/types/${type}.png`;

const TypeIcons: React.FC<TypeIconsProps> = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((typeObj) => {
        const typeName = typeObj.type.name; // Örneğin "fire"
        const imagePath = typeImagePath(typeName);

        return (
          <div key={typeName} className="type-icon mt-1">
            <img src={imagePath} alt={typeName} className="w-7 h-7" />
          </div>
        );
      })}
    </div>
  );
};

export default TypeIcons;
