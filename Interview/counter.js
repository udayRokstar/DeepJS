function makeCounter(initialValue = 0) {
    // Your implementation
  let init = initialValue;
  return  {
    increment: function() {
      return init = init + 1;
    },
    decrement: function()  {
    return init -1;
    },
    reset: function() {
      return init;
    }
  
  }
}

// module.exports = makeCounter;

const counter = makeCounter(5);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())