const express = require("express");
const { calcRank } = require("../utils/helpers");

const router = express.Router();

router.post("/rank", (req, resp) => {
  const userRank = calcRank(req.body.score);
  try {
    resp.json({data: userRank});
  } catch (e) {
    resp.status(500).send();
  }
});

module.exports = router;
