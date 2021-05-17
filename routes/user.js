// variables

const express = require("express");

const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require("../middleware/auth");

// routes post pour l inscription et le login, et get pour le masquage des données personnelles

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/me", auth, userCtrl.me);

module.exports = router;