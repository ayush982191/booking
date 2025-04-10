const express = require("express");
const {CityController} = require("../../controllers")
const {CityMiddleware} = require("../../middlewares")

const app = express.Router();
app.post("/create",CityMiddleware.validateCity,CityController.createCity);
app.get("/all",CityController.getAllCity);
app.get("/:id",CityController.getCity);
app.delete("/:id",CityController.deleteCity);

module.exports= app;