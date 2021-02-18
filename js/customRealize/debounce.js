const debounce = (fn, timeout) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

const debounceFn = debounce(() => {
  console.log("执行了");
}, 1000);
