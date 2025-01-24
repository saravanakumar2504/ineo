const express = require("express");
const { validateMobile } = require("../validations/createUser/mobile");
const { validateProfile } = require("../validations/createUser/profile");
const { validateProfession } = require("../validations/createUser/profession");


const { createUser } = require("../controllers/createUser");

const router = express.Router();

// Profile POST API route
router.post("/createUser", validateMobile, validateProfile, validateProfession, createUser);

module.exports = router;
