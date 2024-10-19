import { useEffect, useState } from 'react';

import { planet_default } from '@/assets';
import { Planet } from '@/src/types/Planet';
import {
  Pagination,
  PlanetCard,
  SearchInput,
  SortSelect,
} from '@/src/components';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(
        'https://api.le-systeme-solaire.net/rest/bodies/'
      );
      const data = await response.json();
      const filteredPlanets = data.bodies.filter((body: any) => body.isPlanet);
      const planetsWithImages = filteredPlanets.map((planet: any) => ({
        id: planet.id,
        englishName: planet.englishName,
        mass: planet.mass,
        image: planet.image || planet_default,
      }));
      setPlanets(planetsWithImages);
    };

    fetchPlanets();
  }, []);

  const filteredPlanets = planets
    .filter((planet) =>
      planet.englishName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      order === 'asc'
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName)
    );

  const totalPages = Math.ceil(filteredPlanets.length / resultsPerPage);
  const displayedPlanets = filteredPlanets.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="flex flex-col items-center w-full">
      {' '}
      {/* Added flexbox for centering */}
      <h1 className="text-2xl text-center font-bold mt-12 mb-20">
        Listado de Planetas
      </h1>
      <div className="flex flex-row items-center gap-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <SortSelect order={order} onChange={setOrder} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {displayedPlanets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PlanetsPage;
