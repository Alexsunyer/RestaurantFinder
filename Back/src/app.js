const express = require("express");
const cors = require("cors");
const fs = require("fs");

const restaurantsData = fs.readFileSync("./src/data/restaurants.json", "utf-8");
const restaurants = JSON.parse(restaurantsData);

const app = express();

app.use(cors());
app.use(express.json());
const port = 4000;

app.get("/api/restaurants", (req, res) => {
  const { name, city, meal } = req.query;
  let results = restaurants;

  if (name) {
    results = results.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (city) {
    results = results.filter((restaurant) =>
      restaurant.address.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (meal) {
    results = results.filter((restaurant) => restaurant.openCloseHours[meal]);
  }

  res.json(results);
});

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Not found",
  });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.httpStatus || 500).send({
    status: "error",
    message: error.message,
  });
});

app.listen(port, () => {
  console.log(`Server working on port ${port}`);
});

module.exports = app;
