const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

const multiBracketValidation = (input) => {
  if (!input) return true;
  if (input.length <= 1) return false;

  const arr = input.match(/[\[\]\{\}\(\)]/g);

  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];

  let matchingOpeningBracket, char;
  let stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    char = arr[i];
    if (closingBrackets.indexOf(char) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
      // console.log(stack.pop(), matchingOpeningBracket);
      console.log(stack.top);
      if (!stack.top || stack.pop() !== matchingOpeningBracket) {
        console.log(stack.pop(), matchingOpeningBracket);
        console.log('TOP!!!!!!!!!!!!!!!', stack.top);
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  console.log(stack);
  return stack.length === 0;
};

module.exports = multiBracketValidation;
