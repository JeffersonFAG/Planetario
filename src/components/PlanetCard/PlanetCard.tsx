import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Planet } from "@/src/types/Planet";
import { PLANET_PAGE } from "@/src/Domain/paths";

interface PlanetCardProps {
  planet: Planet;
}

export const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <Link href={`${PLANET_PAGE}${planet.id}`}>
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
