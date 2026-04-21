const express = require("express");

const skpiRoutes = require("./Components/skpi/skpi-routes");
const rpsRoutes = require("./Components/RPS/RPS-routes");
const jadwalRoutes = require("./Components/JadwalKuliah/JadwalKuliah-routes");

module.exports = () => {
  const app = express.Router();

  app.use("/skpi", skpiRoutes);
  app.use("/rps", rpsRoutes);
  app.use("/jadwal", jadwalRoutes);

  return app;
};
