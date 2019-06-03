const PseudoQueue = require('./queue-with-stacks');

describe('The PseudoQueue Module', () => {
  it('shold be instantiated with two empty stack objects', () => {
    const queue = new PseudoQueue();
    expect(queue.s1.top).toBeNull();
    expect(queue.s2.top).toBeNull();
  });

  it('can successfully dequeue from a queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue('first');
    expect(queue.dequeue()).toBe('first');
  });

  it('can successfully enqueue from a queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue('added item!');
    expect(queue.s1.top.value).toBe('added item!');
  });
});
