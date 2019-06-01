'use strict';

const lib = require('./stacks-and-queues');
// const { Queue } = require('../stacksAndQueues');

describe('The Queue Class', () => {
  it('should be instantianted an empty queue', () => {
    const queue = new lib.Queue();
    expect(queue).toBeDefined();
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });

  it('can successfully enqueue onto a queue', () => {
    const queue = new lib.Queue();
    queue.enqueue('First in');
    queue.enqueue('Second in');
    expect(queue.tail.value).toBe('Second in');
    expect(queue.head.value).toBe('First in');
  });

  it('can successfully enqueue multiplle items onto a queue', () => {
    const queue = new lib.Queue();
    queue.enqueueMultiple(['first value', 'second value', 'third value']);
    expect(queue.tail.value).toBe('third value');
    expect(queue.head.value).toBe('first value');
  });

  it('can successfully dequeue off of a queue the expected value', () => {
    const queue = new lib.Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    let popped = queue.dequeue();
    expect(popped).toBeDefined();
    expect(popped).toBe('first');
  });

  it('can can empty a queue after multiple dequeues', () => {
    const queue = new lib.Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    queue.dequeue();
    queue.dequeue();
    // console.log(queue);
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const queue = new lib.Queue();
    queue.enqueue('first');
    expect(queue.peek()).toBe('first');
  });
});

describe('The Stack Class', () => {
  it('should be instantiated with a top of null', () => {
    const stack = new lib.Stack();
    expect(stack).toBeDefined();
    expect(stack.top).toBeNull();
  });

  it('can successfully push onto a stack', () => {
    const stack = new lib.Stack();
    stack.push('first pushed Node!');
    expect(stack.top.value).toBe('first pushed Node!');
  });

  it('can successfully push multiple nodes onto a stack', () => {
    const stack = new lib.Stack();
    stack.pushMultiple(['first', 'second', 'third']);
    expect(stack.top.value).toBe('third');
  });

  it('can successfully pop off the stack', () => {
    const stack = new lib.Stack();
    stack.push('pushed Node');
    stack.push('next Node');
    stack.pop();
    expect(stack.top.value).toBe('pushed Node');
  });

  it('can successfully empty a stack after multiple pops.', () => {
    const stack = new lib.Stack();
    stack.pushMultiple(['one', 'two', 'three']);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('can successfully peek the next item on the stack', () => {
    const stack = new lib.Stack();
    stack.pushMultiple(['One', 'Two', 'Three']);
    expect(stack.peek()).toBe('Three');
  });
});
