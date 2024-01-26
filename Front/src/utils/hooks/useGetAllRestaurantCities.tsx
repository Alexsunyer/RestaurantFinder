import { useCallback, useEffect, useState } from "react";
import { getDataApiJSON } from "../globals/petitions";
import { Restaurant } from "../../components/SpecificComponents/types";

export const useGetAllRestaurantCities = () => {
  const [restaurantCities, setRestaurantCities] = useState<string[]>([]);

  const getData = useCallback(async () => {
    const restaurants = await getDataApiJSON(
      `${import.meta.env.VITE_BACKEND_URL}`,
      {}
    );
    if (restaurants) {
      const getCity = (address: string) => {
        const splitAddress = address.split(",");
        return splitAddress[splitAddress.length - 1].trim();
      };

      const allCitiesNoRepeatSet: Set<string> = new Set();

      restaurants.forEach((restaurant: Restaurant) => {
        const city = getCity(restaurant.address);
        allCitiesNoRepeatSet.add(city);
      });

      const allCitiesNoRepeat: string[] = Array.from(allCitiesNoRepeatSet);

      setRestaurantCities(allCitiesNoRepeat);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { restaurantCities };
};
