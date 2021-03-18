/**
 * 实现一个 Promise.all
 */

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolvedCounter++;
          resolvedValues[i] = value;
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedValues);
          }
        },
        (reason) => {
          return reject(reason);
        }
      );
    }
  });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "foo");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "bar");
});

const promise5 = Promise.reject("err");
const promise6 = Promise.reject("err2");

const promises = [promise1, promise2, promise3, promise4];
// expected output: Array [3, 42, "foo", "bar"]

const promises1 = [promise1, promise2, promise3, promise4, promise5, promise6];
// expected output: "err"

promiseAll(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

promiseAll(promises1)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
