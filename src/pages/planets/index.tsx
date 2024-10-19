import { useEffect, useState } from "react";

import { bannerBg } from "@/assets";
import {
  Pagination,
  PlanetCard,
  SearchInput,
  SortSelect,
} from "@/src/components";
import usePlanetStore from "@/src/store/planetsStaores";
import { LIMIT_CONTENT } from "@/src/Domain/constans";

const PlanetsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = LIMIT_CONTENT;

  const {
    planetList,
    fetchPlanets,
    queryset,
    updateQueryset,
    order,
    updateOrder,
  } = usePlanetStore();

  useEffect(() => {
    if (planetList.length === 0) fetchPlanets();
  }, []);

  const filteredPlanets = planetList
    .filter((planet) =>
      planet.englishName.toLowerCase().includes(queryset.toLowerCase())
    )
    .sort((a, b) =>
      order === "asc"
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName)
    );

  const totalPages = Math.ceil(filteredPlanets.length / resultsPerPage);
  const displayedPlanets = filteredPlanets.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="bg-custom-bg bg-cover bg-center flex flex-col items-center w-full">
      {/* Added flexbox for centering */}
      <h1
        aria-label="title-page"
        className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mt-12 mb-16 text-gray-800"
      >
        Listado de Planetas
      </h1>
      <div
        aria-label="section search"
        className="flex flex-row items-center gap-4"
      >
        <SearchInput value={queryset} onChange={updateQueryset} />
        <SortSelect order={order} onChange={updateOrder} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {displayedPlanets.length > 0 ? (
          displayedPlanets.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))
        ) : (
          <div className="flex justify-center items-center w-full col-span-full my-4">
            <span className="text-lg text-gray-700 text-4xl">
              Una galaxia de conocimiento te espera
            </span>
          </div>
        )}
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
