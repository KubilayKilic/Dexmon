interface TypeIconsProps {
  types: { type: { name: string } }[]; // Pokemon türlerini içeren bir dizi
}

const typeImagePath = (type: string) => `/images/types/${type}.png`;

const TypeIcons: React.FC<TypeIconsProps> = ({ types }) => {
  return (
    <div className="pokemon-types flex gap-7">
      {types.map((typeObj) => {
        const typeName = typeObj.type.name; // Örneğin "fire"
        const imagePath = typeImagePath(typeName);

        return (
          <div key={typeName} className="type-icon">
            <img src={imagePath} alt={typeName} className="w-7 h-7" />
          </div>
        );
      })}
    </div>
  );
};

export default TypeIcons;
