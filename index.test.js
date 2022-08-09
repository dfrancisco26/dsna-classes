const { Stack, Queue, Adder } = require("./index.js");


describe("Stack Class", () => {

  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
});


  describe("Queue Class", () => {

    it("#enqueue should add an item to the back, next item should be the first one added, newest enqueue should be in the back", () => {
      const queue = new Queue();
      queue.enqueue("fox");
      queue.enqueue("goose");
      queue.enqueue("frog");
      queue.enqueue("bear");
      queue.enqueue("stag");
      expect(queue.count).toBe(5);
      expect(queue.next).toBe("fox");
      expect(queue.last).toBe("stag");
    })

    it("#dequeue should remove the first item, or the next item to go, and test for the one after", () => {
      const queue = new Queue();
      queue.enqueue("fox");
      queue.enqueue("goose");
      queue.enqueue("frog");
      queue.enqueue("bear");
      queue.enqueue("stag");
      queue.dequeue();
      expect(queue.count).toBe(4);
      expect(queue.next).toBe("goose");
    })
  });

  describe("Adder Class", () => {
    it("#add should add the two first items in an array", () => {
      const adder = new Adder();
      adder.push(1);
      adder.push(2);
      expect(adder.sum).toBe(3);
    })
  })

  // add more tests here...
