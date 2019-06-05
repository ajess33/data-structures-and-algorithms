const validator = require('./multi-bracket-validation');

describe('The validation function', () => {
  it('should return an error if an input wasnt provided', () => {
    console.log(validator);
    expect(validator()).toBe('You must pass in a string');
  });
});
