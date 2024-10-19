import { create } from "zustand";
import { Planet } from "@/src/types/Planet";
import { planet_default } from "@/assets";
import { API_URL } from "../Domain/constans";

interface PlanetStore {
  planetList: Planet[];
  queryset: string;
  order: string;
  fetchPlanets: () => Promise<void>;
  updateQueryset: (newQueryset: string) => void;
  updateOrder: (value: string) => void;
}

const usePlanetStore = create<PlanetStore>((set) => ({
  planetList: [],
  queryset: "", // State available for filter
  order: "asc", // State available for order
  fetchPlanets: async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const filteredPlanets = data.bodies.filter((body: any) => body.isPlanet);
      const planetsWithImages = filteredPlanets.map((planet: Planet) => ({
        id: planet.id,
        englishName: planet.englishName,
        mass: planet.mass,
        image: planet.image || planet_default,
        vol: planet.vol,
      }));
      set({ planetList: planetsWithImages });
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  },
  updateQueryset: (newQueryset) => set({ queryset: newQueryset }),
  updateOrder: (newOrder) => set({ order: newOrder }),
}));

export default usePlanetStore;
