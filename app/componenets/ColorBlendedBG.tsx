// ColorBlendedBG.tsx
import { FC } from "react";

interface ColorBlendedBGProps {
  types: { type: { name: string } }[];
  typeColors: { [key: string]: string };
  children: React.ReactNode;
}

const ColorBlendedBG: FC<ColorBlendedBGProps> = ({
  types,
  typeColors,
  children,
}) => {
  const blendColors = (color1: string, color2: string, ratio = 0.8) => {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };

    const rgbToHex = (r: number, g: number, b: number) =>
      `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);

    const r = Math.round(r1 * ratio + r2 * (1 - ratio));
    const g = Math.round(g1 * ratio + g2 * (1 - ratio));
    const b = Math.round(b1 * ratio + b2 * (1 - ratio));

    return rgbToHex(r, g, b);
  };

  const typeColorsArray = types.map(
    (type) => typeColors[type.type.name] || "#ccc"
  );

  const blendedColor =
    typeColorsArray.length === 1
      ? typeColorsArray[0]
      : blendColors(typeColorsArray[0], typeColorsArray[1]);

  return (
    <div
      style={{ backgroundColor: blendedColor }}
      className="flex justify-center mt-11 border-8 border-yellow-300"
    >
      {children}
    </div>
  );
};

export default ColorBlendedBG;
