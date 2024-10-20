import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { Planet } from "@/src/types/Planet";
import usePlanetStore from "@/src/store/planetsStaores";

const PlanetDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { planetList } = usePlanetStore();

  useEffect(() => {
    if (id) {
      fetchPlanetDetails();
    }
  }, [id]);

  const fetchPlanetDetails = async () => {
    const data = planetList.filter((planet: Planet) => planet.id === id);
    const { englishName, mass, image, vol } = data[0];
    const isFavoritePlanet = localStorage.getItem(id as string);

    setIsFavorite(isFavoritePlanet === "true");
    setPlanet({
      id: data[0].id,
      englishName: englishName,
      mass: mass,
      image,
      vol,
    });
  };

  const handleBackButtonClick = () => router.back();

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    localStorage.setItem(id as string, JSON.stringify(!isFavorite)); // Guarda el estado en localStorage
  };

  if (!planet) return <div>Cargando...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <button onClick={handleBackButtonClick} className="text-white">
              <IoArrowBack className="w-8 h-8" />
            </button>
            <h1 className="text-2xl font-bold">{planet.englishName}</h1>
          </div>
          <button
            onClick={handleToggleFavorite}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={250}
            height={250}
            src={planet.image}
            alt={planet.englishName}
            className="object-cover rounded mb-4"
          />
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Masa: {planet.mass.massValue} {planet.mass.unit}
            </p>
            <p className="text-gray-400 text-sm">
              Volumen: {planet.vol.volValue}
            </p>
            <p className="text-gray-400 text-sm">
              Volumen Expuesto: {planet.vol.volExponent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetailPage;
