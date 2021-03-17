/**
 * 2. 实现 getValue 函数来获取path对应的值
 */

var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'

function getValue(obj, path, defaultValue) {
  // coding...
  const splitPath = path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
  // console.log(splitPath,'splitPath')
  return splitPath.reduce((prev, current, i, arr) => {
    const res = prev[current] ? prev[current] : defaultValue;
    // 如果已经取值到 undefined，直接退出 reduce
    if (!!prev[current] === false) {
      arr.splice(1);
    }
    return res;
  }, obj);
}
console.log(getValue(object, "a[0].b.c", 0), "getValue"); // 输出3
console.log(getValue(array, "[0].a.b[0]", 12)); // 输出 1
console.log(getValue(array, "[0].a.b[0].c.b", { b: 3 })); // 输出 {b:3}
