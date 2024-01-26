import { useCallback, useEffect, useState } from "react";
import { Restaurant } from "./types";
import IndividualRestaurant from "./IndividualRestaurant";
import { getDataApiJSON } from "../../utils/globals/petitions";
import { SearchData } from "../BaseComponents/Body/types";
import { Typography } from "@mui/material";

interface RestaurantListProps extends restaurantListLogicProps {}

const RestaurantList: React.FC<RestaurantListProps> = ({ searchData }) => {
  const { restaurants } = useRestaurantListLogic({ searchData });
  const renderThis: JSX.Element[] = [];

  if (!restaurants) {
    return null;
  }

  for (const restaurant of restaurants) {
    renderThis.push(
      <IndividualRestaurant restaurant={restaurant} key={restaurant.id} />
    );
  }

  return (
    <>
      {restaurants.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          py={10}
        >
          We couldn't find a match for your search. Please try another search
        </Typography>
      ) : (
        <ul
          id="restaurant-list"
          className="flex gap-10 mt-10 mb-14 flex-wrap justify-center"
        >
          {renderThis}
        </ul>
      )}
    </>
  );
};

interface restaurantListLogicProps {
  searchData: SearchData;
}

const useRestaurantListLogic = ({ searchData }: restaurantListLogicProps) => {
  const [restaurants, setRestaurants] = useState<null | Restaurant[]>(null);

  const getData = useCallback(async () => {
    if (Object.values(searchData).every((value) => value === "")) {
      const data = await getDataApiJSON(`${import.meta.env.VITE_BACKEND_URL}`);
      setRestaurants(data);
    }
    if (Object.values(searchData).some((value) => value !== "")) {
      const queryParams = new URLSearchParams();
      if (searchData.name !== "") {
        queryParams.append("name", `${searchData.name}`);
      }
      if (searchData.city !== "") {
        queryParams.append("city", `${searchData.city}`);
      }
      if (searchData.meal !== "") {
        queryParams.append("meal", `${searchData.meal}`);
      }
      const data = await getDataApiJSON(
        `${import.meta.env.VITE_BACKEND_URL}?${queryParams}`
      );
      setRestaurants(data);
    }
  }, [searchData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { restaurants };
};

export default RestaurantList;
