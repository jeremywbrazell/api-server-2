"use strict";

const express = require("express");
const morgan = require("morgan");

const notFoundHandler = require("./error-handlers/404.js");
const errorHandler = require("./error-handlers/500.js");

const foodRoutes = require("./routes/food.js");
const dessertRoutes = require("./routes/dessert");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(foodRoutes);
app.use(dessertRoutes);

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    if (!port) {
      throw new Error("Missing Port");
    }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
