const debounce = (fn, timeout) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(this), timeout, ...args);
  };
};

var a = 2;

let obj = {
  debounceFn: debounce(function () {
    console.log(this.a, "a");
  }, 1000),
  a: 1,
};
