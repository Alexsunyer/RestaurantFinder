import { Container } from "@mui/material";
import Search from "../../SpecificComponents/Search";
import RestaurantList from "../../SpecificComponents/RestaurantList";
import { useState } from "react";
import { SearchData } from "./types";

interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
  const { searchData, setSearchData } = useBodyLogic();
  return (
    <Container maxWidth="md">
      <Search setSearchData={setSearchData} />
      <RestaurantList searchData={searchData} />
    </Container>
  );
};

const useBodyLogic = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    name: "",
    city: "",
    meal: "",
  });

  return {
    searchData,
    setSearchData,
  };
};

export default Body;
