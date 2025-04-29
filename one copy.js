function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        console.log('Fetching from cache', key);
        return cache[key];
      } else {
        console.log('Calculating result', key);
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Example usage:
  const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  });
  
  console.log(fibonacci(10)); // Calculating result {"0":10}
  console.log(fibonacci(5)); // Fetching from cache {"0":10}