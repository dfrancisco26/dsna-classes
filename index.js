class Stack {
  #list = [];

  constructor(theList) {
    if (theList) this.#list = theList;
  }
  push(newItem) {
    this.#list.push(newItem);
  }
  peek() {
    return this.#list[this.#list.length - 1];
  }
}

// const instanceOfAStack = new Stack(["cat", "dog", "mouse"]);

class Queue {}

module.exports = { Stack, Queue };
