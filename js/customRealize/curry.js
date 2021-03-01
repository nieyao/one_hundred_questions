// const curry = (fn, arr = []) => (...args) =>
//   ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
//     ...arr,
//     ...args,
//   ]);

function curry(fn) {
  return function currify() {
    const args = Array.prototype.slice.call(arguments);
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }
    return currify.bind(null, ...args);
  };
}

const add = (a, b, c) => a + b + c;

const sum = curry(add);

console.log(sum(1)(2)(3));
console.log(sum(1, 2)(3));
console.log(sum(1, 2, 3));
