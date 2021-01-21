const handleRequestQueue = (urls, max, callback) => {
  let finished = 0;
  const handler = () => {
    if (urls.length) {
      const url = urls.shift();
      fetch(url)
        .then(() => {
          finished++;
          handler();
        })
        .catch((err) => {
          throw Error(err);
        });
    }

    if (finished >= urls.length) {
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

const callback = () => {
  console.log("run callback");
};

handleRequestQueue(urls, max, callback);
