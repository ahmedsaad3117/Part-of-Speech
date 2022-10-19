const { scoresList } = require("../model/DBHandler");

// To shuffle array once more
exports.arrayShuffling = (arr) => {
  return [...arr].sort(() => 0.5 - Math.random());
};

// To calculate the user rank among the participants
exports.calcRank = (userScore) => {
  let userRank = scoresList.filter((score) => userScore > score);
  return ((userRank.length / scoresList.length) * 100).toFixed(2);
};
