function shortIt(string, words) {
  const wordList = string.split(" ");
  wordList.splice(words, wordList.length);
  return wordList.join(" ");
}

export default shortIt;
