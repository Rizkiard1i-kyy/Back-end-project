const express = require("express");
const controller = require("./suratketerangan-controller");

const router = express.Router();

router.post("/", controller.createsuratketerangan);
router.get("/", controller.getallsuratketerangan);

module.exports = router;