// variables

const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");

const multer = require('../middleware/multer-config');

const auth = require("../middleware/auth");

// creation des routes de post des sauces, des modif get et de la suppression des sauces

router.get("", auth, saucesCtrl.getAllSauce);
router.post("", auth, multer, saucesCtrl.createSauce);
router.get("/:id", auth, saucesCtrl.getOneSauce);
router.put("/:id", auth, multer, saucesCtrl.modifySauce);
router.delete("/:id", auth, saucesCtrl.deleteSauce);
router.post("/:id/like", auth, saucesCtrl.likeSauce);

module.exports = router;