const data = require("./TestData.json");

// Fetech All data
const wordList = data.wordList;
const scoresList = data.scoresList;

// Create sorted words obj based on pos
const sortedWordList = {
  adverb: [],
  verb: [],
  noun: [],
  adjective: [],
};

// This function will retrun array of all object that have a spsifec part of speech (pos).
const categorizWords = (partOfSpeech) => {
  return wordList.filter((word) => word.pos === partOfSpeech);
};

// Sorting the words into the new words obj
for (key in sortedWordList) {
  sortedWordList[key].push(...categorizWords(key));
}

// Pick 10 random words from the data which include at least 1 from each type
const generateRandomWords = () => {
  const randomWords = [];

  // Pick the first element from each shuffled category and push it to the new array if it does not exist before
  while (randomWords.length < 10) {
    for (key in sortedWordList) {
      let randomElm = [...sortedWordList[key]].sort(
        () => 0.5 - Math.random()
      )[0];

      if (!randomWords.includes(randomElm) && randomWords.length < 10) {
        randomWords.push(randomElm);
      }
    }
  }
  return randomWords;
};

module.exports = { generateRandomWords, scoresList };
