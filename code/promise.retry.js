/**
 * promiseFn 返回promise 对象的函数
 * max       最大重试次数
 * interval  重试间隔时间
 */
Promise.retry = function (promiseFn, max = 1, interval = 1000) {
  function excuteFn() {
    return promiseFn().then(
      (res) => {
        return Promise.resolve(res);
      },
      (err) => {
        if (max <= 1) {
          return Promise.reject(err);
        } else {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(excuteFn(--max));
            }, interval);
          });
        }
      }
    );
  }
  return excuteFn();
};

// 测试用例
Promise.retry(ajax, 5, 1000)
  .then((res) => console.log("retry-res->", res))
  .catch((err) => console.log("retry-err->", err));

function ajax() {
  const n = Math.random();
  console.log("--->", n);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0.9) {
        resolve(`成功返回值--->${n}`);
      } else {
        reject(`失败返回值--->${n}`);
      }
    }, 3000);
  });
}
