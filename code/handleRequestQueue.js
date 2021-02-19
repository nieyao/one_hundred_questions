const handleRequestQueue = (urls, max, callback) => {
  let finished = 0;
  const tempUrls = [...urls];

  const handler = () => {
    if (tempUrls.length) {
      const url = tempUrls.shift();
      fetch(url)
        .then(() => {
          finished++;
          handler();
        })
        .catch((err) => {
          throw Error(err);
        });
    }

    if (finished === urls.length) {
      callback();
    }
  };

  for (let i = 0; i < max; i++) {
    handler();
  }
};

// 验证

function fetch(idx) {
  return new Promise((resolve) => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx);
    }, timeout);
  });
}

const max = 3;
const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const callback = () => {
  console.log("run callback");
};

handleRequestQueue(urls, max, callback);
console.log(urls, "urls");
