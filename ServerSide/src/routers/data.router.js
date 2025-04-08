const express = require("express");
const router = express.Router();
const dataController = require("../controllers/data.controller");

router.get("/customer-type", dataController.getCustomerType);
router.get("/account-industry", dataController.getAccountIndustry);
router.get("/team", dataController.getTeam);
router.get("/acv-range", dataController.getACVRange);

module.exports = router;
