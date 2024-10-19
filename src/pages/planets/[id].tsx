// pages/planets/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';

import { planet_default } from '@/assets';
import { Planet } from '@/src/types/Planet';

const PlanetDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleBackButtonClick = () => router.back();

  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const fetchPlanetDetails = async () => {
    const response = await fetch(
      `https://api.le-systeme-solaire.net/rest/bodies/${id}`
    );
    const data = await response.json();
    setPlanet({
      id: data.id,
      englishName: data.englishName,
      mass: data.mass,
      image: data.image || planet_default,
    });
  };

  useEffect(() => {
    if (id) {
      fetchPlanetDetails();
    }
  }, [id]);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    localStorage.setItem(id as string, JSON.stringify(!isFavorite)); // Guarda el estado en localStorage
  };

  if (!planet) return <div>Cargando...</div>;

  return (
    <div>
      <div className="m-4 w-9">
        <button onClick={handleBackButtonClick}>
          <IoArrowBack className='flex w-8 h-8'  />
        </button>
      </div>
      <div className="flex flex-row p-4 w-2/5">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-row justify-between gap-3">
            <h1 className="text-2xl font-bold text-center ml-2">
              {planet.englishName}
            </h1>
            <button
              onClick={handleToggleFavorite}
              className={`p-2 rounded-full text-white bg-blue-600`}
            >
              {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
          </div>
          <Image
            width={250}
            height={250}
            src={planet.image}
            alt={planet.englishName}
            className="object-cover rounded col-start-1 col-end-2"
          />
          <div className="">
            <p className="text-gray-600 text-sm">
              Masa: {planet.mass.massValue} {planet.mass.unit}
            </p>
            <p className="text-gray-600 text-sm">
              Masa: {planet.mass.massValue} {planet.mass.unit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetailPage;
