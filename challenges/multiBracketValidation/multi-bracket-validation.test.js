const validator = require('./multi-bracket-validation');

describe('The validation function', () => {
  it('should return an error if an input wasnt provided', () => {
    expect(validator()).toBe(true);
  });

  it('should return a boolean if user passed in a string', () => {
    expect(validator('[]')).toBeTruthy();
  });

  it('should return true', () => {
    expect(validator('[{}()]')).toBeTruthy();
  });

  it.each([
    [validator('()'), true], // F
    [validator('({}({hello}))'), true], // F
    [validator('(}'), false],
    [validator('{(})'), false],
    [validator('('), false]
  ])('Received should be expected', (received, expected) => {
    expect(received).toBe(expected);
  });
});
