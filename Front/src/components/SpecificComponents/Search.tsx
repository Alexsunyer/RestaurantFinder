import {
  Alert,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import { NewMeal, SearchData } from "../BaseComponents/Body/types";
import { useGetAllRestaurantCities } from "../../utils/hooks/useGetAllRestaurantCities";
import { useCallback, useState } from "react";
import ButtonLoader from "./ButtonLoader";

interface SearchProps extends SearchLogicProps {}

const Search = ({ setSearchData }: SearchProps) => {
  const {
    name,
    city,
    meal,
    setName,
    setCity,
    setMeal,
    error,
    showLoader,
    nameHandleChange,
    cityHandleChange,
    mealHandleChange,
    handleSearchSubmit,
  } = useSearchLogic({ setSearchData });
  const { restaurantCities } = useGetAllRestaurantCities();

  const cities = [];
  for (let i = 0; i < restaurantCities.length - 1; i++) {
    cities.push(
      <MenuItem key={i} value={restaurantCities[i]}>
        {restaurantCities[i]}
      </MenuItem>
    );
  }
  return (
    <form
      className="flex flex-col justify-center items-center gap-3 p-2 pt-0 rounded-md"
      onSubmit={handleSearchSubmit}
    >
      <FormControl
        className="input-form"
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "3px",
        }}
      >
        <TextField
          fullWidth
          error={error}
          sx={{ backgroundColor: "white" }}
          name="name"
          id="name"
          label="Search for name"
          variant="outlined"
          value={name}
          onChange={nameHandleChange}
        />
        <IconButton
          className="empty-input"
          onClick={() => setName("")}
          aria-label="empty name"
        >
          <CancelIcon />
        </IconButton>
      </FormControl>
      <FormControl
        className="input-form"
        fullWidth
        sx={{ display: "flex", flexDirection: "row", gap: "3px" }}
      >
        <InputLabel error={error} id="city">
          Search for city
        </InputLabel>
        <Select
          fullWidth
          error={error}
          sx={{ backgroundColor: "white" }}
          labelId="city"
          id="city"
          value={city}
          label="Search for city"
          onChange={cityHandleChange}
        >
          {cities}
        </Select>
        <IconButton
          className="empty-input"
          onClick={() => setCity("")}
          aria-label="empty city"
        >
          <CancelIcon />
        </IconButton>
      </FormControl>
      <FormControl
        className="input-form"
        fullWidth
        sx={{ display: "flex", flexDirection: "row", gap: "3px" }}
      >
        <ToggleButtonGroup
          id="meal-buttons"
          fullWidth
          color="primary"
          value={meal}
          exclusive
          onChange={mealHandleChange}
          aria-label="Platform"
          sx={{
            backgroundColor: "white",
            ...(error && { borderWidth: 1, borderColor: "red" }),
          }}
        >
          <ToggleButton value="breakfast">Breakfast</ToggleButton>
          <ToggleButton value="lunch">Lunch</ToggleButton>
          <ToggleButton value="dinner">Dinner</ToggleButton>
        </ToggleButtonGroup>
        <IconButton
          className="empty-input"
          onClick={() => setMeal("")}
          aria-label="empty meal"
        >
          <CancelIcon />
        </IconButton>
      </FormControl>
      <ButtonLoader
        text="Search for restaurants"
        loading={showLoader}
        disabled={showLoader}
      />
      {error && (
        <Alert className="error-alert" severity="error">
          You must fill at least one filter
        </Alert>
      )}
    </form>
  );
};

interface SearchLogicProps {
  setSearchData: React.Dispatch<React.SetStateAction<SearchData>>;
}

const useSearchLogic = ({ setSearchData }: SearchLogicProps) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [meal, setMeal] = useState("");
  const [error, setError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const nameHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const cityHandleChange = useCallback((event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  }, []);

  const mealHandleChange = useCallback(
    (event: React.MouseEvent<HTMLElement>, newMeal: NewMeal) => {
      setMeal(newMeal);
    },
    []
  );

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (name === "" && city === "" && (meal === "" || meal === null)) {
        setError(true);
        return;
      }
      setError(false);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        setSearchData((prevSearchData: SearchData) => ({
          ...prevSearchData,
          name,
          city,
          meal,
        }));
      }, 1000);
    },
    [name, city, meal, setSearchData]
  );

  return {
    name,
    city,
    meal,
    setName,
    setCity,
    setMeal,
    error,
    showLoader,
    nameHandleChange,
    cityHandleChange,
    mealHandleChange,
    handleSearchSubmit,
  };
};

export default Search;
