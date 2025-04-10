const express = require("express");
const {CityController} = require("../../controllers")
const {CityMiddleware} = require("../../middlewares")

const app = express.Router();
app.post("/create",CityMiddleware.validateCity,CityController.createCity)

module.exports= app;