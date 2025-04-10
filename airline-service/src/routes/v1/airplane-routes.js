const express = require("express");
const {AirplaneController} = require("../../controllers");
const {AirplaneMiddleware} = require("../../middlewares")

const router = express.Router();

router.post("/",AirplaneMiddleware.validateAirplane,AirplaneController.createAirplane);
router.get("/all",AirplaneController.getAirplanes);
router.get("/:id",AirplaneController.getAirplane);
router.delete("/:id",AirplaneController.destroyAirplane);
router.patch("/:id",AirplaneController.updateAirplane)

module.exports = router
