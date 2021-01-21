function add(...args1) {
  let _args = [...args1];
  function sum(...args2) {
    _args = [..._args, ...args2];

    return sum;
  }

  sum.toString = function () {
    return _args.reduce((a, b) => {
      a += b;
      return a;
    }, 0);
  };

  return sum;
}

console.log(add(1)(2)); // 3
console.log(add(1, 2, 3)(4, 5, 1)(6)(3)); // 25
