function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  console.log(path.replace(/\[(\d+)\]/g, ".$1"), "paths");

  return paths.reduce((prev, current) => {
    return prev[current] ? prev[current] : defaultValue;
  }, source);
}

console.log(get({ a: [{ b: 1 }] }, "a[0].b[3]", "hah"), "d");
// output: 1
