// pages/planets/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { planet_default } from '@/assets';
import { Planet } from '@/src/types/Planet';

const PlanetDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const fetchPlanetDetails = async () => {
        const response = await fetch(
          `https://api.le-systeme-solaire.net/rest/bodies/${id}`
        );
        const data = await response.json();
        setPlanet({
          id: data.id,
          englishName: data.englishName,
          mass: data.mass,
          image: data.image || planet_default, // Coloca una imagen por defecto
        });
      };

      fetchPlanetDetails();
    }
  }, [id]);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    localStorage.setItem(id as string, JSON.stringify(!isFavorite)); // Guarda el estado en localStorage
  };

  if (!planet) return <div>Cargando...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{planet.englishName}</h1>
      <img
        src={planet.image}
        alt={planet.englishName}
        className="w-full h-64 object-cover rounded"
      />
      <p>
        Masa: {planet.mass.massValue} {planet.mass.unit}
      </p>
      <button
        onClick={handleToggleFavorite}
        className={`mt-4 px-4 py-2 rounded ${
          isFavorite ? 'bg-red-500' : 'bg-blue-500'
        }`}
      >
        {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default PlanetDetailPage;
