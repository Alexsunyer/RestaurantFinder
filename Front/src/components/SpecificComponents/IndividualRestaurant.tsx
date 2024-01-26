import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Restaurant } from "./types";
import Tag from "@mui/icons-material/Tag";
import CardBand from "./CardBand";
import { motion } from "framer-motion";

interface IndividualRestaurantProps {
  restaurant: Restaurant;
}

const IndividualRestaurant: React.FC<IndividualRestaurantProps> = ({
  restaurant,
}) => {
  const restaurantTags = restaurant.tags;
  const renderTags = [];

  for (let i = 0; i < restaurant.tags.length - 1; i++) {
    renderTags.push(
      <Chip
        key={i}
        icon={<Tag />}
        label={`${restaurantTags[i]}`}
        variant={i % 2 === 0 ? "filled" : "outlined"}
      />
    );
  }
  return (
    <motion.div
      id="restaurant"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: restaurant.id * 0.1 }}
    >
      <Card sx={{ width: "300px", position: "relative" }}>
        <CardBand
          condition={restaurant.status === "closed"}
          children="CLOSED"
        />
        <CardMedia
          sx={{ height: 140 }}
          image="/bgRestaurant.png"
          title="restaurant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography
            className="address"
            variant="body2"
            color="text.secondary"
          >
            {restaurant.address}
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1} m="16px" mt={0}>
          {renderTags}
        </Stack>
      </Card>
    </motion.div>
  );
};

export default IndividualRestaurant;
