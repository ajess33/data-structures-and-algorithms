const PseudoQueue = require('./queue-with-stacks');

describe('The PseudoQueue Module', () => {
  it('shold be instantiated with two empty stack objects', () => {
    const queue = new PseudoQueue();
    expect(queue.s1.top).toBeNull();
    expect(queue.s2.top).toBeNull();
  });

  it('enqueue should add new nodes to the end of the queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.s1.peek().value).toBe('third');
  });

  it('can successfully dequeue from a queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue('first');
    expect(queue.dequeue()).toBe('first');
  });
});
