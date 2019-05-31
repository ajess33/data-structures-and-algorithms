'use strict';

const Stack = require('./stacks-and-queues');

describe('The stack class', () => {
  it('should be instantiated with a top of null', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
    expect(stack.top).toBeNull();
  });

  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('first pushed Node!');
    expect(stack.top.value).toBe('first pushed Node!');
  });

  it('can successfully push multiple nodes onto a stack', () => {
    const stack = new Stack();
    stack.pushMultiple(['first', 'second', 'third']);
    expect(stack.top.value).toBe('third');
  });
});
