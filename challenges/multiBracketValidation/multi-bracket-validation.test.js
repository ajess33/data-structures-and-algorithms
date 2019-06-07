const validator = require('./multi-bracket-validation');

xdescribe('The validation function', () => {
  it('should return an error if an input wasnt provided', () => {
    console.log(validator);
    expect(validator()).toBe('You must pass in a string');
  });

  it('should return a boolean if user passed in a string', () => {
    expect(validator('[]')).toBeTruthy();
  });
});
