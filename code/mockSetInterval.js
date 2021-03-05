class MockSetInterval {
  constructor(fn, timeout, ...args) {
    this.stop = false;
    this.fn = fn;
    this.timeout = timeout;
    this.args = args;
  }

  mockSetInterval() {
    setTimeout(
      () => {
        if (!this.stop) {
          this.fn.apply(this, this.args);
          this.mockSetInterval(this.fn, this.timeout, ...this.args);
        }
      },
      this.timeout,
      ...this.args
    );
  }

  stopMockSetInterval() {
    this.stop = true;
  }
}

const mockSetInterval = new MockSetInterval(
  (a) => {
    console.log(a);
  },
  1000,
  1
);

mockSetInterval.mockSetInterval();

setTimeout(() => {
  mockSetInterval.stopMockSetInterval();
}, 5000);
