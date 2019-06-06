const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

const multiBracketValidation = (input) => {
  if (!input) return `You must pass in a string`;

  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];
  const stack = new Stack();
  const inputArr = input.split('');
  let bracketArr = [];
  inputArr.forEach((char) => {
    if (char === '(' || char === '[' || char === '{') {
      bracketArr.push(char);
    } else {
      return;
    }
  });

  for (let i = 0; i < bracketArr.length; i++) {
    if (opening.includes(bracketArr[i])) {
      stack.push(bracketArr[i]);
    }
  }
};

module.exports = multiBracketValidation;
