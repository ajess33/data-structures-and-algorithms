const repeatedWord = require('./repeated-word.js');

const testString3 = `austin austin austin jess jess jess name name name dog dog`;

describe('The repeatedWord Function', () => {
  it('should return the word that is first duplicated', () => {
    let testString = `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...`;

    let result = repeatedWord(testString);
    expect(result.firstDup).toBe('it');
  });

  it('should return the word that is first duplicated', () => {
    const testString2 = `It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...`;

    let result = repeatedWord(testString2);
    expect(result.firstDup).toBe('summer');
  });

  it('should return a count object of all the words in the string', () => {
    let result = repeatedWord(testString3);
    expect(result.counts).toBeDefined();
  });

  // it('should return the top 3 most frequently used words', () => {
  //   let result = repeatedWord(testString3);
  //   console.log(result.frequent);
  //   expect(result.frequent).toEqual([{}]);
  // });
});
