class Stack {
    constructor() {
        // Initialize your stack
      this.item = []
    }
    
    push(element) {
        // Add element to the top
      this.item.push(element)
      return this.item.length;
    }
    
    pop() {
        // Remove and return top element
        return this.item.pop();
    }
    
    peek() {
        // Return top element without removing
        // return this.item[0];
        return this.item[this.item.length - 1]
    }
    
    isEmpty() {
        // Check if stack is empty
        // if(this.item === 0)  true
        return this.item.length === 0 ? true : false;
    }
    
    size() {
        // Return number of elements
        return this.item.length
    }
    
    clear() {
        this.item = []
        // Remove all elements
    }

    all() {
        return this.item
    }
}

const stack = new Stack();

console.log(stack.isEmpty())

console.log(stack.push(10))
console.log(stack.push(20))
console.log(stack.push(30))
console.log(stack.size())
console.log(stack.peek())
console.log(stack.all())