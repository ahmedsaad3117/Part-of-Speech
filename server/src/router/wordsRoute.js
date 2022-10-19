const express = require("express");
const { generateRandomWords } = require("../model/DBHandler");
const { arrayShuffling } = require("../utils/helpers");

const router = express.Router();

router.get("/words", (req, resp) => {
  try {
    resp.json(arrayShuffling(generateRandomWords()));
  } catch (e) {
    resp.status(500).send();
  }
});

module.exports = router;
