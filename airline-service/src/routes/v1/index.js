const express = require("express");
const AirplaneRoutes = require("./airplane-routes");
const CityRoute = require("./city-routes")

const router = express.Router();

router.use("/airplanes",AirplaneRoutes);
router.use("/city",CityRoute)

module.exports = router;