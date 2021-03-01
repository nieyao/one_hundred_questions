function throttle(fn, timeout) {
  let canRun = true;
  return function (...args) {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, timeout);
  };
}
