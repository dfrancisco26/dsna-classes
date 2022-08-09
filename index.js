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

class Queue {
    #list = [];

    constructor(theList) {
        if (theList) this.#list = theList;
    }
    
    enqueue(item) {
        this.#list.push(item);
    }
    
    dequeue() {
        this.#list.shift();
    }

        get count() {
        return this.#list.length;
    }
    
        get next() {
        return this.#list[0];
    }
        get last() {
            return this.#list[this.#list.length - 1];
        }
}

class Adder {
    #numbers = [];

    constructor(numArr) {
        if (numArr) this.#numbers = numArr;
    }

    get sum() {
        return this.#numbers[0] + this.#numbers[1]
    }


    push(item) {
        this.#numbers.push(item)
    }
}


module.exports = { Stack, Queue, Adder };
