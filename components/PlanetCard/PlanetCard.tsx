import React from "react";
import { Planet } from "../../types/Planet";
import Link from "next/link";
import Image from "next/image";

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  console.log("planet", planet);
  return (
    <Link href={`/planets/${planet.id}`}>
      <div className="border rounded p-4 cursor-pointer hover:shadow-lg">
        <Image
          width={300}
          height={300}
          src={planet.image}
          alt={planet.englishName}
          className="w-full h-32 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{planet.englishName}</h2>
        <p>
          Masa: {planet.mass.massValue} {planet.mass.unit}
        </p>
      </div>
    </Link>
  );
};

export default PlanetCard;
